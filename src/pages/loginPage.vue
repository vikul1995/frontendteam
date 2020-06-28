<template>

    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-xl-8 col-11 d-flex justify-content-center">
                        <div class="card bg-authentication rounded-0 mb-0">
                            <div class="row m-0">
                                <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                                    <img src="../app-assets/images/pages/login.png" alt="branding logo">
                                </div>
                                <div class="col-lg-6 col-12 p-0">
                                    <div class="card rounded-0 mb-0 px-2">
                                        <div class="card-header pb-1">
                                            <div class="card-title">
                                                <h4 class="mb-0">Login</h4>
                                            </div>
                                        </div>
                                        <p class="px-2">Welcome back, please login to your account.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-1">
                                                <form>
                                                    <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                        <input type="text" class="form-control" id="user-name" placeholder="Username" required
                                                        v-model="user.email" name="email">
                                                        <div class="form-control-position">
                                                            <i class="feather icon-user"></i>
                                                        </div>
                                                        <label for="user-name">Username</label>
                                                    </fieldset>

                                                    <fieldset class="form-label-group position-relative has-icon-left">
                                                        <input type="password" class="form-control" id="user-password" placeholder="Password" required
                                                        v-model="user.password" name="password" autocomplete="off">
                                                        <div class="form-control-position">
                                                            <i class="feather icon-lock"></i>
                                                        </div>
                                                        <label for="user-password">Password</label>
                                                    </fieldset>
                                                    <div class="form-group d-flex justify-content-between align-items-center">
                                                        <div class="text-left">
                                                            <fieldset class="checkbox">
                                                                <div class="vs-checkbox-con vs-checkbox-primary">
                                                                    <input type="checkbox">
                                                                    <span class="vs-checkbox">
                                                                        <span class="vs-checkbox--check">
                                                                            <i class="vs-icon feather icon-check"></i>
                                                                        </span>
                                                                    </span>
                                                                    <span class="">Remember me</span>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <div class="text-right"><a href="" class="card-link">Forgot Password?</a></div>
                                                    </div>
                                                    <a href="/RegisterPage" class="btn btn-outline-primary float-left btn-inline">Register</a>
                                                    <button type="submit" @click="login" class="btn btn-primary float-right btn-inline">Login</button>
                                                </form>
                                            </div>

                                       </div>
                                       
                                    </div><br>
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
                user:{
               email: '',
               password: ''
               
             },
            };
        },
        methods: {
            login(event){
                event.preventDefault();
                var formData = new FormData();
                formData.append("email" ,this.user.email);
                formData.append("password" ,this.user.password);
                console.log(formData)
                DataService.login(formData)
                    .then(response=>{
                       document.cookie='enpneeds_token='+response.data.token;
                        console.log(document.cookie);
                        this.message="Successfully saved !"
                        this.$router.push('/timeline')
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
