	<template>
    <div id="postsAd">
    <div class="app-content content" >
        
        <div class="content-wrapper" >
            
				<div class="content-body" >
				<section class="basic-select2" >
                    <div class="row" >
                        <div class="col-12">
                            <div class="card" >
                                <div class="card-header">
                                    <h2 class="card-title"><b>Post Ad Information:</b></h2>
                                </div>
                                <div class="card-content" >
                                    <div class="card-body" style="background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Felegant-light-blue-line-background_1138823.html&psig=AOvVaw0xEBLSQQwEI6XhUksyWbuR&ust=1592388346192000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiskf-KhuoCFQAAAAAdAAAAABAU'); background-color: #0C1A3F ">
                                        <div class="row">
                                            
                                            <div class="col-sm-6 col-12">  
                                                <div class="form-group">
                                                    <select style="height:45px;width:50%" name="selectedCategory" @change="onChange($event)" >
                                                        <option value="">Select Category</option>
                                                        <option  :value="(Category.id)"  v-for=" Category in Categories" :key="Category.id">{{Category.category_name}}</option>
                                                    </select>  <b style="color:red">{{msgcat}}</b>
                                                </div>
                                            </div>
											<div class="col-sm-6 col-12">
                                                 <select  style="height:45px;width:50%" :disabled="subCategories.length == 0" name="selectedsubCategory" @change="onChangesub($event)">
                                                    <option value="">Select Sub Category</option>
                                                    <option :value="(subCategory.id)"  v-for="subCategory in subCategories" :key="subCategory.id">{{subCategory.subcategory_name}}</option>
                                                </select> <b style="color:red">{{msgsub}}</b>
                                                </div>
                                            </div>
                                            
											
                       <div class="row">
											<div class="col-12">
												<div class="card">
													<div class="card-header">
														<h4 class="card-title">Select Images to upload</h4>
													</div>
													<div class="card-content">
														<div class="card-body">
															
															<label class="file-select">
                                                                
                                  <input type="file" id="img" v-on="postAds.image" ref="file" name="image" multiple="multiple"/>
                                   </label><b style="color:red">{{msgimage}}</b>
														
														</div>
													</div>
												</div>
											</div>
										</div> 

 <div class="row">
											<div class="col-12">
												<div class="card">
													<div class="card-header">
														<h4 class="card-title">Select Brochure to upload</h4>
													</div>
													<div class="card-content">
														<div class="card-body">
															
															<label class="file-select">
                                                          
                                  <input type="file" id="brochure" v-on="postAds.brochure"  name="brochure" />
                                   </label><b style="color:red">{{msgbrochure}}</b>
														
														</div>
													</div>
												</div>
											</div>
										</div> 

				
                     <div class="row">
											<div class="col-12">
												<div class="card">
													<div class="card-header">
														<h4 class="card-title">Select Admin for your PostAd</h4>
													</div>
													<div class="card-content">
														<div class="card-body">
                              <label class="file-select"><i style="font-size:15px;margin-left:50px">(It is optional)</i> </label><br> 
<div style="float:left;margin-right:10px">
  <div v-if="selected1" >
    <div v-if="selected1.profileimg" >
    <img style="height:40px;width:40px;border-radius: 50%;" :src="selected1.profileimg" alt="">
   </div>
   <div v-else >
    <img style="height:40px;width:40px;border-radius: 50%;" src="./../assets/profileimg.webp" alt="">
   </div>
    </div>
    <div else id="div1">
       <img style="height:40px;width:40px;border-radius: 50%;" src="./../assets/profileimg.webp" alt="">
    </div>
                </div>    <div style="float:left;width:60%">       <b-field  >
                                    <b-autocomplete
                                        :data="data1"
                                        placeholder="Select admin for your Ads"
                                        field="full_name"
                                        icon="magnify"
                                        :loading="isFetching1"
                                        @typing="getAdminData"
                                        @select="option => selected1 = option"
                                        style="width:100%; "
                                        >

                                        <template slot-scope="props">
                                            <div class="media" style="width:30%">
                                                <div class="media-left" v-if="props.option.profileimg">
                                                    <img style="width:50px;height:50px;border-radius: 50%;" :src="props.option.profileimg">
                                                </div>
                                                <div class="media-left" v-else>
                                                    <img style="width:50px;height:50px;border-radius: 50%;" src="./../assets/profileimg.webp">
                                                </div>
                                                <div class="media-content">
                                                    {{ props.option.full_name }} <br><br><br>
                                                     {{ props.option.designation }}
                                                </div>
                                            </div>
                                            <hr>
                                        </template>
                                    </b-autocomplete>
                                </b-field>
                                       
														</div>
														</div>
													</div>
												</div>
											</div>
										</div> 

				<section id="basic-input">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Basic Information</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                           
                                            <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="name"> Name </label><i style="color:red">{{msgname}}</i>
                                                    
                                                    <input type="text" class="form-control" placeholder=" Name" name="name" v-model="postAds.name">
                                                </fieldset>
                                            </div>
                                            <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="email">Contact Person</label><i style="color:red">{{msgcontact}}</i>
                                                    <input type="text" class="form-control" placeholder="contact person" name="contact_person" v-model="postAds.contact_person">
                                                </fieldset>
                                            </div>
                                             <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Conatctno">Email</label><i style="color:red">{{msgemail}}</i>
                                                    <input style="width:100% "  type="email"  class="form-control" placeholder="E-mail" name="email" v-model="postAds.email">
                                                    
                                                </fieldset>
                                            </div>
                                             <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Conatctno">Alternative Email</label><i style="color:red">{{msgaltemail}}</i>
                                                    <input type="email" style="width:100% " class="form-control" placeholder="altervative E-mail" name="alt_email" v-model="postAds.alt_email">
                                                    
                                                </fieldset>
                                            </div>
                                             <div  class="col-sm-6 col-12">
                                                  
                                             
                                                  <fieldset class="form-group" style="float:left" >
                                                  <label for="Conatctno">Country Code</label><i style="color:red">{{msgcountry}}</i>
                                                  <section >
                                                 
                                                    <b-field  >
                                                        <b-autocomplete
                                                            :data="data"
                                                            placeholder="country code"
                                                            field="countryName"
                                                            icon="magnify"
                                                            :loading="isFetching"
                                                            @typing="getAsyncData"
                                                            @select="option => selected = option"
                                                            style="width:60%; "
                                                            >

                                                            <template slot-scope="props">
                                                                <div class="media" style="width:50%">
                                                                    <div class="media-left">
                                                                        <img width="32" :src="require(`./../assets/countryFlag/${props.option.countryCode}.png`)">
                                                                    </div>
                                                                    <div class="media-content">
                                                                        {{ props.option.countryName }}
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </b-autocomplete>
                                                    </b-field>
                                       
                                                 </section>
                                                 </fieldset  >
                                                  <fieldset class="form-group" style="float:left">
                                                    <label for="Conatctno">Contact Number</label><i style="color:red">{{msgmobile}}</i>
                                                    <input type="text" style="width:100%" class="form-control" placeholder="mobile" name="mobile" v-model="postAds.mobile">
                                                    
                                                </fieldset>
                                            </div>
                                            <div class="col-sm-6 col-12">
                                                 <fieldset class="form-group">
                                                    <label for="disabledInput">company Name</label><i style="color:red">{{msgcompany}}</i>
                                                    <input type="text" class="form-control" style="width:100% "  placeholder="company" name="company" v-model="postAds.company">
                                                </fieldset>
                                            </div>
                                            
                                            
                                        
                                              <div class="col-12">
                                                <fieldset class="form-group">
                                                    <label for="disabledInput">Address</label><i style="color:red">{{msgsddress}}</i><br>
                                                    
                                                    
                                                <gmap-autocomplete class="form-control" style="width:50% "  @place_changed="setPlace">
                                                        </gmap-autocomplete>
                                                </fieldset>
                                            </div>
                                            
                                           <gmap-map
                                            :center="center"
                                            :zoom="12"
                                            style="width:100%;  height: 300px; border:2px"
                                            >
                                            <gmap-marker
                                                :key="index"
                                                v-for="(m, index) in markers"
                                                :position="m.position"
                                                @click="center=m.position"
                                            ></gmap-marker>
                                            </gmap-map>
                                            
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="full-editor">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
											<h2 class="card-title">Ad Description</h2>
										</div>
                                <div class="card-content collapse show">
                                    <div class="card-body">
										
                                        
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div id="full-wrapper">
                                                    <div id="full-container">
                                                        <div class="editor">
                                                           
                                                            <p style="text-align:left ; font-size:14px">Describe your Ads Details here.</p><i style="color:red">{{msgdescription}}</i>

                                                           <tinymce id="d1" style="width:80%" v-model="postAds.description"></tinymce>
                                                           
														
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                                            <div class="form-group">	
												<div class="checkbox" >
													<label>
														<input type="checkbox" required=""><i class="check-box" ></i><b style="font-size:15px ;color:white">  By clicking "Post Ad", you agree to our Terms of Use and Privacy Policy and acknowledge that you are the rightful owner of this item.</b>
													</label>
												</div>
											</div>
											<button type="button" class="btn bg-gradient-primary mr-1 mb-1" @click="postData">Submit</button>
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
</template>
<script>

import debounce from 'lodash/debounce'
import http from "../http-common";
import DataService from "../services/DataService";
import EquipmentDataService from "../services/EquipmentDataService";

 export default {
        data() {
            

        return {
                admin: [],
                selected1: null,
                isFetching1: false,
                data1: [],
               countryData: [],
                selected: null,
                isFetching: false,
                data: [],
              center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                currentPlace:null,
                latitude:null,
                longitude:null,
             Categories: [],
            subCategories: [],
            subcategoryid:0,
            categoryid:0,
            msgcat:'',
            msgsub:'',
            msgmobile:'',
            msgcontact:'',
            msgname:'',
            msgimage:'',
            msgdescription:'',
            msgcountry:'',
            msgcompany:'',
             msgsddress:'',
             msgcode:'',
              msgemail:'',
               msgaltemail:'',
               msgbrochure:'',
      keywords: null,
          results: [],
            postAds:{
                   name:'',
                   contact_person:'',
                   mobile:'',
                    image:'',
                    description:'',
                     company:'',
                     email:'',
                     alt_email:'',
                      admin:'',
                   
                       
             },
             
              country_code:'',
                submitted: false,
                message:'',
            users:[],
            user:[],
          
      }
            
          
    },   
    created() {
         DataService.getCategory()
        .then(response => {
          this.Categories = response.data;
          console.log(this.Categories);
          
        })
        .catch(e => {
          console.log(e);
        });
        
         DataService.getAllUser() 
        .then(response => {
          this.users = response.data;
          
          
        })
        .catch(e => {
          console.log(e);
        });
         EquipmentDataService.admin() 
        .then(response => {
          this.admin = response.data.list;
          console.log( this.admin);
          
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
            this.isFetching1 = false
          });

            http.get('./api/countryflag')
                    .then(response => {
                        this.countryData=[];
                        this.countryData =response.data;
                       
                    })
                    .catch((error) => {
                        this.countryData = [];
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
       EquipmentDataService.getuser()
     .then(response => {
       this.user=response.data;
       

     }) 
                    
},
 mounted() {
    this.geolocate();
  },
  
 

    methods: {

            postData(event){
                 event.preventDefault();
                var formData = new FormData();
               console.log(this.selected);
                console.log(this.selected1);
                   if ((this.subCategoryid)<1){
                       this.msgsub="(please select subcategory items)";
                   }
                   else{
                       this.msgsub='';
                     formData.append("subcategory_id" ,this.subCategoryid);
                   }
                   if((this.categoryid)<1){
                    this.msgcat="(please select category items)";
                   }
                    else{
                        this.msgcat='';
                      formData.append("category_id" ,this.categoryid);
                   }
                   if((this.postAds.name).length<2){
                      this.msgname="(please enter correct posts ad name)";
                      }
                     else{
                         this.msgname='';
                      formData.append("name" , this.postAds.name);
                     }
                    if((this.postAds.contact_person).length<2){
                        this.msgcontact="(please enter correct contact person )";
                     }
                      else{
                          this.msgcontact='';
                       formData.append("contact_person" ,  this.postAds.contact_person);
                     }
              
              
                        if((this.selected)==null)
                
                              {
                                  this.msgcountry="(please select country code )";
                              }
               else{
                          this.msgcountry='';
                       formData.append("country_code" ,  this.selected.countryNumberCode);
                     }
                      if((this.selected1)==null)
                              {
                                  this.msgadmin="(please select country code )";
                              }
               else{
                          this.msgadmin='';
                       formData.append("admin" ,  this.selected1.id);
                     }
              if((this.$refs.file.files).length<1){
                        this.msgimage="(please select image)";
                    }
                    else{
                        this.msgimage='';
                         for( var i = 0; i < this.$refs.file.files.length; i++ ){
                        let file = this.$refs.file.files[i];
                     console.log(file);
                    formData.append('image[' + i + ']', file);
                      }
                    }
                    if((this.postAds.description).length<1){
                             this.msgdescription="(please enter about your post in  description box)";
                        }
                    else{
                        this.msgdescription='';
                       formData.append("description" , this.postAds.description);             
                     }
                      if((this.postAds.company).length<1){
                             this.msgcompany="(please enter your company name)";
                        }
                    else{
                        this.msgcompany='';
                      formData.append("company" , this.postAds.company);
                     }
                     
                    
                     if(this.postAds.email == null || this.postAds.email == '')
                            {
                          this.msgemail = "(Please Enter Email)";
                               }
                         else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.postAds.email))
                         {
                             this.msgemail=''; 
                 formData.append("email" ,this.postAds.email);
                        
                              }
                    else{
                         this.msgemail= "(Please Enter Correct Email)";
                     }
                 
                  if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.postAds.alt_email)){
                           this.msgaltemail=''; 
                 formData.append("alt_email" ,this.postAds.alt_email);
                            
                        }
                    else{
                        this.msgaltemail="(please enter your alternative email)";
                     }
            
            

                      if(this.postAds.mobile == null || this.postAds.mobile == '')
                            {
                          this.msgmobile = "(Please Enter your mobile no)";
                               }
                     else if(/^[789]\d{9}$/.test(this.postAds.mobile)){
                           this.msgmobile=''; 
                           formData.append("mobile" ,this.postAds.mobile);
                           
                          }
                    else{
                         this.msgmobile="(please enter correct mobile no)";
                     }
                     
                      if(this.currentPlace==null){
                          this.msgsddress="(please enter  your address)";
                            
                        }
                    else{
                         this.msgsddress=''; 
                     formData.append("address" ,this.currentPlace.formatted_address );
                     
                       formData.append("latitude" ,this.latitude); 
                      formData.append("longitude" ,this.longitude);   
                     }

                  if((this.admin)==null){
                 formData.append("admin" ,this.user.id);
                             
                        }
                    else{
                        
                         this.msgcode=''; 
                 formData.append("admin" ,this.admin.id);
                     }
                       if((document.getElementById("brochure").files[0].length)<1){
                              this.msgbrochure="(please upload Brochure)"
                             
                        }
                    else{
                        
                         
                 formData.append("upload_file" ,document.getElementById("brochure").files[0]);
                     }

                
                if((this.categoryid)==1){
                DataService.postServices(formData)
                    .then(response=>{
                        
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/Services");
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                }
                   else if((this.categoryid)==4){
                DataService.postUnit_rigs(formData)
                    .then(response=>{
                       
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/Unit_rigs");
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                }
              else if((this.categoryid)==2){
                DataService.postEquipment(formData)
                    .then(response=>{
                        
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/Equipments");
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                }
              else if((this.categoryid)==3){
                DataService.postSupplier(formData)
                    .then(response=>{
                       
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/Supplier");
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                }
                  
            },
           onChange(event) {
                this.subCategories=[];
              console.log(event.target.value);
              this.categoryid=event.target.value;
              DataService.getsubCategory(event.target.value)
             .then(response => {
             this.subCategories = response.data;
              console.log(response.data);
          
                })
             .catch(e => {
              console.log(e);
               });   
            },
        onChangesub(event) {
              this.subCategoryid=event.target.value;
              console.log("subcategory");
              console.log(this.subCategoryid);
        },
          onChangecode(event) {
              this.country_code=event.target.value;
             
        },


        setPlace(place) {
            this.markers=[];
      this.currentPlace = place;
      console.log(this.currentPlace.formatted_address );
       if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.latitude=marker.lat;
         this.longitude=marker.lng;
        console.log(this.latitude);
         console.log(this.longitude);
        
      }
    },
 
   
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    getAsyncData: debounce(function (countryName) {
                if (!countryName.length) {
                    this.data = []
                    return
                }
                this.isFetching = true
                this.data = []
                this.countryData.forEach((item) => {
                    if(item.countryName.toLowerCase().includes(countryName.toLowerCase()))
                        this.data.push(item);
                });
                this.isFetching = false;
            }, 500),
       getAdminData: debounce(function (full_name) {
                if (!full_name.length) {
                    this.data1 = []
                    return
                }
                this.isFetching1 = true
                this.data1 = [];
                console.log(this.data1);
                document.getElementById("div1").style.display="none";
                this.admin.forEach((item) => {
                    if(item.full_name.toLowerCase().includes(full_name.toLowerCase()))
                        this.data1.push(item);
                });
                this.isFetching1 = false;
            }, 500)
  }
       }
 
</script>     
<style  lang="scss">
@import  "./../assets/flag.scss"
</style>

<style>
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
 #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #description {
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
      }

      #infowindow-content .title {
        font-weight: bold;
      }

      #infowindow-content {
        display: none;
      }

      #map #infowindow-content {
        display: inline;
      }

      .pac-card {
        margin: 10px 10px 0 0;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        font-family: Roboto;
      }

      #pac-container {
        padding-bottom: 12px;
        margin-right: 12px;
      }

      .pac-controls {
        display: inline-block;
        padding: 5px 11px;
      }

      .pac-controls label {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 300;
      }

      #pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 400px;
      }

      #pac-input:focus {
        border-color: #4d90fe;
      }

      #title {
        color: #fff;
        background-color: #4d90fe;
        font-size: 25px;
        font-weight: 500;
        padding: 6px 12px;
      }
      #target {
        width: 345px;
      }

      * {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
