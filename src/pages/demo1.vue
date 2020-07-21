<template>

 <div id="app">


 <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">Profile</h2>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a>
                                    </li>
                                    <li class="breadcrumb-item active">Profile
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                    <div class="form-group breadcrum-right">
                        <div class="dropdown">
                            <button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-settings"></i></button>
                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Chat</a><a class="dropdown-item" href="#">Email</a><a class="dropdown-item" href="#">Calendar</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <div id="user-profile">
                    <div class="row">
                        <div class="col-12">
                            <div class="profile-header mb-2">
                                
                                <div class="relative">
                                    <div class="cover-container">
        
                                     <input type="file"  accept="image/*" name="image" id="file"   >
                                      <input type="file"  accept="image/*" name="image1" id="file1"   >
                                        <p><label @click="loadFile()" >Upload Image</label></p>
                                     
                                    </div>
                                  
                                        <div class="float-right">
                                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1">
                                                <i class="feather icon-edit-2"></i>
                                            </button>
                                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary">
                                                <i class="feather icon-settings"></i>
                                            </button>
                                        
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end align-items-center profile-header-nav">
                                    <nav class="navbar navbar-expand-sm w-100 pr-0">
                                        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"><i class="feather icon-align-justify"></i></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav justify-content-around w-75 ml-sm-auto">
                                                <li class="nav-item px-sm-0">
                                                    <a href="#" class="nav-link font-small-3">Profile</a>
                                                </li>

                                                <li class="nav-item px-sm-0">
                                                    <a href="#" class="nav-link font-small-3">Education</a>
                                                </li>
                                                 <li class="nav-item px-sm-0">
                                                    <a href="#" class="nav-link font-small-3">Experience</a>
                                                </li>
                                                <li class="nav-item px-sm-0">
                                                    <a href="#" class="nav-link font-small-3">Photos</a>
                                                </li>
                                                <li class="nav-item px-sm-0">
                                                    <a href="#" class="nav-link font-small-3">Friends</a>
                                                </li>
                                
                                               
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    



                   <section id="profile-info">
                        <div class="row">
                            <div class="col-lg-3 col-12">
                           </div> 
                        </div>
                        
                        
                            
                        
                            <div class="col-lg-6 col-12">
                              <div class="card">
                                    <div class="card-body">
                                      <div>

       first name :{{prof.first_name}}<br>
       middle_name:{{prof.middle_name}}<br>
       last_name:{{prof.last_name}}<br>
       email:{{prof.email}}<br>
       mobile_no:{{prof.mobile_no}}<br>
       address:{{prof.address}}<br>
       postal code:{{prof.postal_code}}<br>
       birth date:{{prof.birth_date}}<br>
       Gender:{{prof.gender}}<br>
        
</div>
                                          <div class="float-right">
                                        <button onclick="document.getElementById('id01').style.display='block'" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width:auto;"><i class="feather icon-edit-2"></i></button>

<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" id="profile" style="overflow-y: scroll; width:50%; height:90%; Position:relative;">
    <div class="container">
      <h1>Edit Intro</h1>
     <hr>
      <label for="First name"><b>First name *</b></label>
      <input type="text" class="form-control" placeholder="First name" required v-model="profiles.first_name" name="first_name">

        <label for="First name"><b>Middle name *</b></label>
      <input type="text" class="form-control" placeholder="Middle name" required v-model="profiles.middle_name" name="middle_name">

      <label for="Last Name"><b>Last Name *</b></label>
      <input type="text" class="form-control" placeholder="Last Name" required v-model="profiles.last_name" name="last_name">
        
         <label for="Email"><b>Email *</b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="profiles.email" name="email">

         <label for="Mobile No"><b>mobile No *</b></label>
      <input type="text" class="form-control" placeholder="" required v-model="profiles.mobile_no" name="mobile_no">
        

       <label for="Address"><b>Address *</b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="profiles.address" name="address">

         <label for="Postal Code"><b>Postal Code *</b></label>
      <input type="text" class="form-control" placeholder="" required v-model="profiles.postal_code" name="postal_code">
        
        
       <label for="Birth Date"><b>Birth Date *</b></label>
      <input type="date" class="form-control" placeholder="" required v-model="profiles.birth_date" name="birth_date">
        <br>
          <label for="Birth Date"><b>Gender *</b></label><br>
        <input type="radio" id="male" required v-model="profiles.male" name="male" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" required v-model="profiles.female" name="female" value="female">
        <label for="female">Female</label><br>
        
        <hr>
        
        <div class="clearfix">
     
        <button type="button" @click="saveInfo($event)" class="signupbtn">Update</button>
      </div>
        
    </div>
  </form>
</div>

        
                                        </div>
                               </div>
                         </div>
                   



        <div class="card">
                                    <div class="card-body">
                                      <div>


        Headline :{{about.headline}}<br>
        industry:{{about.industry}}<br>
        Description:{{about.description}}<br>
</div>
                                             <div class="float-right">
                                           <button onclick="document.getElementById('id02').style.display='block'" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width:auto;"><i class="feather icon-edit-2"></i></button>

<div id="id02" class="modal">
  <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" id="about" style="overflow-y: scroll; width:50%; height:90%; Position:relative;" >
    <div class="container">
    <h1>Add experience</h1>
      <hr>
        
      
         
        
      <label for="headline "><b>Headline *</b></label>
      <input type="text" class="form-control" placeholder=""  v-model="abouts.headline" name="headline" >

     
         <label for="industry"><b>Industry * </b></label>
      <input type="text" class="form-control" placeholder=""   v-model="abouts.industry" name="industry">
        
       
<label for="w3review">Description</label><br>
<textarea id="w3review" class="form-control"  v-model="abouts.description" name="description" rows="4" cols="50">
  </textarea>



        <hr>
        
        <div class="clearfix">
     
        <button type="submit" @click="saveAbout($event)" class="signupbtn">Update</button>
      </div>
        
    </div>
  </form>
</div>
                                        </div>
                                    </div>
                                </div>
                                
                                

                                
                                
                                <div class="card">
                                    <div class="card-body">
                                    

<div>
        Position:{{exps.position}}<br>
        company:{{exps.company}}<br>
        location:{{exps.location}}<br>
        from:{{exps.from}}<br>
        to:{{exps.to}}<br>
</div>


                                             <div class="float-right">
                                           <button onclick="document.getElementById('id03').style.display='block'" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width:auto;"><i class="feather icon-edit-2"></i></button>

<div id="id03" class="modal">
  <span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" id="exp" style="overflow-y: scroll; width:50%; height:90%; Position:relative;" >
    <div class="container">
    <h1>Add Experience</h1>
      <hr>
        
      
         
        
      <label for="Title "><b>Position *</b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="experiences.position" name="position" >

     
         <label for="Company"><b>Company * </b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="experiences.company" name="company" >
        
         <label for="Country"><b>Location * </b></label>
      <input type="text"  class="form-control" placeholder=""  required v-model="experiences.location" name="location" >

         <label for=""><b>From * </b></label>
      <input type="date" class="form-control" placeholder=""  required v-model="experiences.from" name="from" >

         <label for=""><b>To *</b></label>
      <input type="date"  class="form-control" placeholder=""  required v-model="experiences.to" name="to" >

       

        <hr>
        
        <div class="clearfix">
     
        <button type="submit" @click="saveExp($event)" class="signupbtn">Add</button>
      </div>
        
    </div>
  </form>
</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                <div class="card">
                                    <div class="card-body">
                             <div>         

        school:{{educations.school}}<br>
        degree:{{educations.degree}}<br>
        field:{{educations.field_of_study}}<br>
        start_year:{{educations.start_year}}<br>
        end_year:{{educations.end_year}}<br>
        activities_and_societies:{{educations.activities_and_societies}}<br>
</div>


                                            <div class="float-right">
<button onclick="document.getElementById('id04').style.display='block'" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width:auto;">  <i class="feather icon-edit-2"></i></button>
<div id="id04" class="modal">
  <span onclick="document.getElementById('id04').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content" id="education" style="overflow-y: scroll; width:50%; height:90%; Position:relative;" >
    <div class="container">
      <h1>Education</h1>
     <hr>
        
      <label for="School"><b>School *</b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="education.school" name="school">

      <label for="Degree"><b>Degree *</b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="education.degree" name="degree">
        
         <label for="Field "><b>Field * </b></label>
      <input type="text" class="form-control" placeholder=""  required v-model="education.field_of_study" name="field_of_study">
        
         <label for="end_year"><b>Form * </b></label>
      <input type="date" class="form-control" placeholder=""  required v-model="education.start_year" name="start_year">

         <label for="end_year"><b>To *</b></label>
      <input type="date" class="form-control" placeholder=""  required v-model="education.end_year " name="end_year">
<br>
        <label for="Activities and societies"><b>Activities and societies * </b></label>
      <input type="text"  class="form-control" placeholder=""  required v-model="education.activities_and_societies" name="activities_and_societies" >
      



        
        <hr>
        
        <div class="clearfix">
     
        <button type="submit" @click="saveEdu($event)" class="signupbtn">Add</button>
      </div>
        
    </div>
  </form>
</div>
                                   
                                        </div>
                                    </div>
                                </div>
                                
                                
                            
                        </div>
                
             
                    </section>

                </div>
            </div>
        </div>
 </div>
 


 

 <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>
        <hr>
        <!-- BEGIN: Footer-->
    
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="widget">
                            <div class="foot-logo">
                                <center>&#194;&#169; 2020 <a href="https://www.enpneeds.com" style=" color: #007bff;">Enpneeds Private Limited.</a> All rights reserved.</center>
                            </div>
                            <div align="center"><span class="textf"><a href="https://s3.amazonaws.com/enpneeds.com/Enpneeds+Private+Limited+User+Agreement.pdf"> User Agreement</a></span> <span class="textf"><a href="https://s3.amazonaws.com/enpneeds.com/Enpneeds+Private+Limited+Advertising+services+Agreement.pdf"> Privacy Policy</a></span>                            <span class="textf"><a href="https://s3.amazonaws.com/enpneeds.com/Enpneeds+Professional+Community+Policies.pdf"> Community Guidelines</a></span> <span class="textf"><a href="https://s3.amazonaws.com/enpneeds.com/Cookies+Enpneeds+Private+Limited.pdf"> Cookie Policy</a></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       
    
    </div>


</template>      




<script>
 import DataService from "../services/DataService";

 export default {
        data() {
            return {

              prof:[],
              id:'',
              about:[],
           aboutid:'',
             exps:[],
                expid:'',

               educations:[],
                educationid:'',

                image:[],

                profiles:{
             first_name:'',
              middle_name:'',
              last_name:'',
             email:'',
            mobile_no:'',
            address:'',
            postal_code:'',
            birth_date:'',
            male:'',
            female:'',

             },

                abouts:{
           headline:'',
            industry:'',
            description:'',

             },

                experiences:{
            position:'',
            company:'',
            location:'',
            from:'',
            to:'',

             },

                education:{
            school:'',
            degree:'',
           field_of_study:'',
            start_year:'',
            end_year:'',
            activities_and_societies:'',
            


             },



            

                submitted: false,
                message:''
            };
        },

created() {
        DataService.getProfile()
        .then(response => {
          this.prof = response.data.data;
         
          console.log(response.data.data);
          
        })
        .catch(e => {
          console.log(e);
        });



             DataService.getabout()
               .then(response => {
                this.about = response.data.data;
                 
                 
                })
                  .catch(e => {
                   console.log(e);
             });

            DataService.getexperiences()
               .then(response => {
                this.exps = response.data.data[0];
            console.log( this.exps);
                })
                  .catch(e => {
                   console.log(e);
             });

                DataService.geteducation()
               .then(response => {
                this.educations= response.data.data;
                console.log(this.educations);
                console.log("education");
                })
                  .catch(e => {
                   console.log(e);
             });



               DataService.getimage()
               .then(response => {
                this.image= response.data.data;
                console.log(this.image);
               
                })
                  .catch(e => {
                   console.log(e);
             });





  },

        methods: {
            saveInfo(event){
                event.preventDefault();
                 this.id=this.prof.id;
          const params = new URLSearchParams();
          Array.from(new FormData(document.getElementById("profile")).entries())
          .forEach(element => {
               if(typeof element[1] != "undefined" && element[1]!="") 
                params.append(element[0],element[1])
               });
               DataService.updateprofile(this.id,params)
                    .then(response=>{
                        this.profiles=response.data;
                        console.log(response.data);
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                        this.me
            });
            },


                saveAbout(event){
                     event.preventDefault();
                    console.log("this is about ");
                if((this.about).length==0){
                var formData = new FormData();
                formData.append("headline" ,this.abouts.headline);
                formData.append("industry" , this.abouts.industry);
                formData.append("description" , this.abouts.description); 
                DataService.about(formData)
                    .then(response=>{
                        this.abouts=response.data;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                       
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                   
                }
                else{
               this.aboutid=this.about.id;
                const params = new URLSearchParams();
            Array.from(new FormData(document.getElementById("about")).entries())
             .forEach(element => {
               if(typeof element[1] != "undefined" && element[1] !="") 
                params.append(element[0],element[1]);
               });
         console.log("Successfully saved !");
               DataService.updateabout(this.aboutid,params)
                    .then(response=>{
                        console.log(response.data);
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                }
                },



             saveExp(event){
                event.preventDefault();
                  if((this.exps).length==0){
                       console.log("post");
                var formData = new FormData(document.getElementById("exp"));
                formData.append("postion" ,this.experiences.position);
                formData.append("company" , this.experiences.company);
                formData.append("location" , this.experiences.location);
                formData.append("from",this.experiences.from);
                formData.append("to",this.experiences.to);
             
              
                console.log(formData)
                
                DataService.experiences(formData)
                    .then(response=>{
                        this.experiences=response.data;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                  }
                 else{
                     this.expid=this.exps.id;
                const params = new URLSearchParams();
            Array.from(new FormData(document.getElementById("exp")).entries())
             .forEach(element => {
               if(typeof element[1] != "undefined" && element[1] !="") 
                params.append(element[0],element[1]);
               });
         console.log("Successfully saved !");
               DataService.updateexp(this.expid,params)
                    .then(response=>{
                        this.experiences=response.data;
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                }

            },


              saveEdu(event){
              
                 if(this.educations==null){
                       event.preventDefault();
                var formData = new FormData();
                formData.append("school" ,this.education.school);
                formData.append("degree" , this.education.degree);
                formData.append("field_of_study" , this.education.field_of_study);
                formData.append("start_year",this.education.start_year);
                formData.append("end_year", this.education.end_year);
                formData.append("activities_and_societies",this.education.activities_and_societies);
                console.log( this.education.end_year);
                console.log( this.education.start_year);
                 console.log(this.education.activities_and_societies);
                DataService.education(formData)
                    .then(response=>{
                        this.education=response.data;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials ";
                    });
               }
                     
              else {
                  this.educationid=this.education.id;
                const params = new URLSearchParams();
            Array.from(new FormData(document.getElementById("education")).entries())
             .forEach(element => {
               if(typeof element[1] != "undefined" && element[1] !="") 
                params.append(element[0],element[1]);
               });
                 console.log("Successfully saved !");
               DataService.updateedu(this.educationid,params)
                    .then(response=>{
                         this.education=response.data;
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                }


            },
            loadFile(){
                
                if(this.image==null)
                {
               
                var formData = new FormData();
                formData.append("profileimg" , document.getElementById("file").files[0]);
                 formData.append("profileimg1" , document.getElementById("file1").files[0]);
                 console.log(document.getElementById("file").files[0]);
                 console.log(document.getElementById("file1").files[0]);
                DataService.postimage(formData)
                    .then(response=>{
                         this.image=response.data;
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                }
            else{
                this.imageid=this.image.id;
                const params = new URLSearchParams();
            Array.from(new FormData(document.getElementById("file")).entries())
             .forEach(element => {
               if(typeof element[1] != "undefined" && element[1] !="") 
                params.append(element[0],element[1]);
               });
                 
               DataService.imageupload(this.imageid,params)
                    .then(response=>{
                         this.image=response.data;
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });

            }

        
            }

          

           
            }
       
 }

</script>







