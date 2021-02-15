import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { CustomValidators } from 'src/app/shared/helpers/CustomValidators'
import { User } from 'src/app/shared/models/user'
import * as moment from 'moment'
import { AddUser, GetUser } from 'src/app/shared/store/actions/users.actions'
import { selectUsers } from 'src/app/shared/store/reducers/users.reducer'
import { RootState } from 'src/app/shared/store/store'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  public roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Writer', value: 'writer' },
    { label: 'Reader', value: 'reader' },
  ]

  public categories = [
    { label: 'Programming language', value: 'language' },
    { label: 'Design', value: 'design' },
    { label: 'Engineering', value: 'engineering' },
  ]
  userForm: FormGroup

  constructor(private router: Router, private activetadRoute: ActivatedRoute, private store: Store<RootState>) {}

  users
  isLoading = true
  userId
  skills = new FormArray([])
  editing = false
  user: User = new User()
  private subscriptions: Subscription = new Subscription()

  ngOnInit(): void {
    this.initializeForm()
    this.activetadRoute.params.subscribe((params) => {
      this.userId = params.id
      if (this.userId) {
        this.editing = true
        console.log('paramId', this.userId)

        this.store.dispatch(new GetUser(this.userId))
        this.subscriptions.add(
          this.store.select(selectUsers).subscribe((users) => {
            setTimeout(() => (this.isLoading = false), 2000)
            this.user = users.selectedUser
            this.populateForm()
          }),
        )
      } else {
        this.isLoading = false
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  //Function to generate guid
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  addSkill() {
    this.skills.push(
      new FormGroup({
        id: new FormControl(this.skills.length),
        name: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
        description: new FormControl(''),
        category: new FormControl(''),
      }),
    )
  }

  removeSkill(index: number) {
    this.skills.removeAt(index)
  }

  handleSubmit() {
    if (this.userForm.invalid) {
      return
    }
    console.log(this.userForm.value)
    this.updateUser()
    this.store.dispatch(new AddUser(this.user))
    this.router.navigate(['/dashboard/users'])
  }
  private updateUser() {
    this.user = {
      id: this.user.id ? this.user.id : this.newGuid(),
      firstname: this.userForm.get('firstName').value,
      lastname: this.userForm.get('lastName').value,
      birthday: moment(this.userForm.get('birthday').value),
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value,
      username: this.userForm.get('username').value,
      role: this.userForm.get('role').value,
      skills: this.skills.value,
    }
  }
  private populateForm() {
    if (this.user.id) {
      this.user.skills.map((s) =>
        this.skills.push(
          new FormGroup(
            {
              name: new FormControl(s.name),
              description: new FormControl(s.description),
              category: new FormControl(s.category),
            },
            Validators.required,
          ),
        ),
      )
      this.userForm.patchValue({
        firstName: this.user.firstname,
        lastName: this.user.lastname,
        birthday: this.user.birthday.format('MM/DD/YYYY'),
        username: this.user.username,
        email: this.user.email,
        role: this.user.role,
        skills: [this.skills.value],
      })
    }
    this.userForm.get('password.password1').clearValidators()
    this.userForm.get('password.password2').clearValidators()
  }

  private initializeForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
      lastName: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
      birthday: new FormControl('', {
        validators: [Validators.required, CustomValidators.minimumAge(18)],
        updateOn: 'change',
      }),
      username: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      role: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
      password: new FormGroup(
        {
          password1: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)],
            updateOn: 'change',
          }),
          password2: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)],
            updateOn: 'change',
          }),
        },
        CustomValidators.mustMatch,
      ),
      skills: this.skills,
    })
  }
}
