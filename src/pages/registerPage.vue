<template>
    <div class="app-content content" style="margin:0">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-xl-8 col-10 d-flex justify-content-center" style="margin:auto">
                        <div class="card bg-authentication rounded-0 mb-0">
                            <div class="row m-0">
                                <div class="col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0">
                                    <img src="../app-assets/images/pages/register.jpg" alt="branding logo">
                                </div>
                                <div class="col-lg-6 col-12 p-0">
                                    <div class="card rounded-0 mb-0 p-2">
                                        <div class="card-header pt-50 pb-1">
                                            <div class="card-title">
                                                <h4 class="mb-0">Create Account</h4>
                                            </div>
                                        </div>
                                        <p class="px-2">Fill the below form to create a new account.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-0">
                                                
                                                    <div class="form-label-group">
                                                        <input type="text" id="inputName" class="form-control" placeholder="First Name" required
                                                        v-model="register.first_name" name="first_name" style="width: 100%;">
                                                        <label for="inputName">First Name</label>
                                                    </div>
                                                    <div class="form-label-group">
                                                        <input type="text" id="inputName" class="form-control" placeholder="Last Name" required
                                                        v-model="register.last_name" name="last_name" style="width: 100%;">
                                                        <label for="inputName">Last Name</label>
                                                    </div>
                                                    <div class="form-label-group">
                                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required
                                                        v-model="register.email" name="email">
                                                        <label for="inputEmail">Email</label>
                                                    </div>
                                                    <div class="form-label-group">
                                                        <label for="dob">Birthday:</label>
                                                        <input type="date" class="form-control" id="dob" name="dob" v-model="register.dob" required>
                                                    </div>
                                                        <p class="">Gender:</p>
                                                        <div id="genderContainer" name="genderContainer" class="genderOptions">

                                                            <div id="male" class="floatBlock">
                                                                <label for="male" style="padding-right: 20px"> <input id="male" name="gender" v-model="register.gender" type="radio" value="Male" required/>  Male  </label>
                                                            </div>

                                                            <div id="demale" class="floatBlock">
                                                                <label for="female" style="padding-right: 20px"> <input id="female" name="gender" v-model="register.gender" type="radio" value="Female" /> Female </label>
                                                            </div>

                                                            <div id="others" class="floatBlock">
                                                                <label for="others"> <input id="others" name="gender" v-model="register.gender" type="radio" /> Others </label>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="form-label-group">
                                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
                                                        v-model="register.password" name="password">
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                    <div class="form-label-group">
                                                        <input type="password" id="inputConfPassword" class="form-control" placeholder="Confirm Password" required
                                                        v-model="register.c_password" name="c_password">
                                                        <label for="inputConfPassword">Confirm Password</label>
                                                    </div>
                                                    <router-link to="LoginPage"><button  type="submit"  class="btn btn-outline-primary float-left btn-inline mb-50">Login</button></router-link>
                                                    <button type="submit" @click="saveRegister" class="btn btn-primary float-right btn-inline mb-50">Register</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
import DataService from "../services/DataService";
 export default {
        data() {
            return {
                
                register:{
              first_name: '',
              last_name: '',
              email: '',
              dob: '',
              gender: '',
              password: '',
              c_password: ''
                },
                submitted: false,
                message:''
            };
        },
        methods: {
            saveRegister(event){
                event.preventDefault();
                var formData = new FormData();
                    formData.append("first_name", this.register.first_name);
                    formData.append("last_name", this.register.last_name);
                    formData.append("email", this.register.email);
                    formData.append("dob", this.register.dob);
                    formData.append("gender", this.register.gender);
                    formData.append("password", this.register.password);
                    formData.append("c_password", this.register.c_password);
                console.log(formData)
                DataService.createRegister(formData)
                    .then(response=>{
                        this.register.id=response.data.id;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/LoginPage");
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                    this.submitted=true;
            }
            
        }
        
    }
</script>
<style>
.genderOptions {
	border: none;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	break-before: always;
	margin: 15px;
}
</style>