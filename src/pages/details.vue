<template>
<div id="details">

    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">Product Details</h2>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Timeline</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Equipents</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="app-ecommerce-shop.html">Product Details</a>
                                    </li>
                                   
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                    <div class="form-group breadcrum-right">
                        <div class="dropdown" id="update">
                         
                            <button   @click="deleteForm()"  class="dButton" type="button" data-toggle="dropdown" aria-haspopup="true"  aria-expanded="false"><i style='margin-left:10px;font-size:21px' class="fa fa-trash "></i></button>
                            
                            <button  @click="editForm()"  class="dButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class='fas fa-edit' style='margin-left:10px;font-size:21px'></i></button>
                            
                        </div>

                    </div>
                </div>
            </div>
<div class="form-popup" id="deleteForm" style="margin-right:500px;width:400px;height:270px;box-shadow: 15px 15px 5px #AFACA6" >

  <form action="" class="form-container" style="width:400px;height:250px;" > 
  <div style="height:1px;"><span class="close"  @click="closedeleteForm()">&times;</span></div>
    <div style=""><h1 style="margin-left:20px;color:Black;margin-top:20px;"><b>Delete</b></h1>
   
    </div>
<hr><br>
    <h4><b style="margin-left:30px">Are you sure want to delete your Ads </b></h4><br><br><br>
    <button type="submit" v-on:click="deletePost($event)" class="btn"><b>Delete</b></button>
    <button type="button"  class="btn cancel" @click="closedeleteForm()"><b>Cancel</b></button>
  </form>
 
</div>
<div id="editForm" class="modal" style="margin-top:10%;margin-left:30%;width:60%;height:85% ;">
  
  <form class="modal-content" id="updatePost" style=" overflow-y: scroll;width:75%; height:85%; Position:relative;box-shadow: 15px 15px 5px #AFACA6;margin-bottom:100px;margin-left:10px">
  
    <div class="container" style="margin-left:20px;margin-top:20px;margin-bottom:20px;width:95%;background-color: #f1f1f1;">
      <span onclick="document.getElementById('editForm').style.display='none'" style="float:right" class="close1"  ><i class="fa fa-close"></i></span>
   <div style=""><h1 style="color:Black;margin-top:10px;"><b>Edit Your Ads</b></h1>
   
    </div><br>
      <label for="Name"><b style="font-size:13px">Name </b></label>
      <input type="text" class="form-control" style="width:600px" placeholder=" name"  v-model="product_detail.data.name" name="name">
      <br>
        <label for="First name"><b style="font-size:13px">Contact Person</b></label>
      <input type="text" class="form-control" style="width:600px" placeholder="Contact person" v-model="product_detail.data.contact_person"   name="contact_person">
<br>
      <label for="Last Name"><b style="font-size:12px">Email </b></label><i style="color:red">{{msgemail}}</i>
      <input type="email" class="form-control" style="width:600px" placeholder="Email"  v-model="product_detail.data.email"  name="email" required />
        <br>
         <label for="Email"><b style="font-size:12px"> Alternative Email </b></label>
      <input type="email" class="form-control" style="width:600px" placeholder=" Alternative Email" v-model="product_detail.data.alt_email"  name="alt_email" required/>
<br>
        
        <br>

       <label for="Address"><b style="font-size:12px">Address </b></label>
       <div>
       <gmap-autocomplete class="form-control" style="width:600px;" v-model="product_detail.data.address" @place_changed="setPlace"> </gmap-autocomplete><br>
       
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
        </gmap-map></div>
<br><div>
<div style="float:left">
         <label for="Postal Code"><b style="font-size:12px">Country Code</b></label>
                <section >
                   {{selected}}                           
                <b-field  >
                    <b-autocomplete
                        :data="data"
                        placeholder="country code"
                        field="countryName"
                        icon="magnify"
                        :loading="isFetching"
                        @typing="getAsyncData"
                        @select="option => selected = option"
                        style="width:90%;height:50px "
                        
                        >

                        <template slot-scope="props">
                            <div class="media" style="width:20%">
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
              </div>
              <div>
               <label for="Mobile No"><b style="font-size:14px">Contact Number </b></label>
      <input type="tel" pattern="^\d{10}$" class="form-control"  style="width:300px" placeholder="contact_no"  v-model="product_detail.data.mobile" name="mobile"></div>
      </div>
        <br>
        
       <label for="company Name"><b style="font-size:14px">Company Name</b></label>
      <input type="text" class="form-control" placeholder="" style="width:600px"  v-model="product_detail.data.company"  name="company">
      <br>
      <br>
       <label for="company Name"><b style="font-size:14px">Admin</b></label><br>
      
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
      <br>
      <br>
      <br>
      <br>
          <label for="company Name"><b style="font-size:14px">Description</b></label>
      <tinymce id="d1" style="width:600px"  v-model="description" name="description"></tinymce>
      <br>
     
        <label for="company Name"><b style="font-size:14px">Upload Brochure</b></label><br>
       <input type="file" id="brochure" style="color:black" name="brochure" />
        <hr>
        
        <div class="clearfix" style="margin-bottom:40px;margin-top:40px;">
      <button type="button"  onclick="document.getElementById('editForm').style.display='none'" class="signupbtn">Cancel</button>
     
        <button type="button"  v-on:click="updateAds($event)" class="signupbtn">Update</button>
        
      </div>
        
    </div>
  </form>
</div>
<div class="form-popup" id="imageLoader" style="margin-top:250px;margin-left:400px;margin-right:370px;width:700px;height:420px;" >
<form  style="align:center">
    <div id="loader" ></div>
    </form>
</div>
<div class="form-popup " id="imageForm" style="margin-top:10px;margin-right:370px;width:700px;height:420px;box-shadow: 15px 15px 5px #AFACA6" >

 <form action="" class="form-container" style="width:700px;height:400px;overflow-x:scroll;" > 
    <div ><span class="close2"  @click="closeImgForm()">X</span></div>
    <div style=""><h2 style="margin-left:20px;color:Black;margin-top:10px;"><b>Images</b></h2>
   
    </div>
<hr>

 <input type="file" id="image" style="color:black;margin-left:30px" ref="file" name="image" multiple="multiple"/> <br>
 <button type="button" style="float:left;margin-left:30px;margin-top:10px;"  class="addimage" v-on:click="addImage($event)" >add</button>
 <br>
   <div id="carousel" style="margin-right:20px">
   <div  v-for="[id,image] in imageStore" :key="id" class="slide" :id="id">
   <span class="imgHover" @click="deleteImage(id) " >
    <img  style="height:180px;width:200px;" :src="image" /><br>
    <i  style='margin-top:10px;margin-left:70px;font-size:20px' class="fa fa-trash "></i>
    </span>
   </div>
    </div><br>
    
  
  
  </form>
 
</div>

<div style="height:300px;width:100%">
  <vl-map data-projection="EPSG:4326" style="height: 300px">
    <vl-view :zoom.sync="zoom" :center.sync="center1" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile>
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-feature  >
      <vl-geom-point :coordinates="[parseFloat(product_detail.data.longitude),parseFloat(product_detail.data.latitude)]"></vl-geom-point>
        <vl-style-box>
          <vl-style-icon :src="icon" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
          <vl-style-text :text="product_detail.data.company" font="14px  bold italic large" textAlign="left" style="color: red"></vl-style-text>
        </vl-style-box>
    </vl-feature>
   
  </vl-map>
  </div>

            <div class="content-body">
                <!-- app ecommerce details start -->
                <section class="app-ecommerce-details">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-5 mt-2">
                                <div class="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                    <div class="d-flex align-items-center justify-content-center" >
                                     <div class="container" >
                                                <button  @click="imageForm()" id="imageEdit" class="button"><i class='fas fa-camera' style='font-size:20px;margin-right:7px'></i>Edit </button>

                                            <transition-group name="fade" tag="div" style="margin-left:50px;height:250px;width:400px;">
                                            <div v-for="i in [currentIndex]" :key="i">
                                                <img  style="height:250px;width:400px;" :src="currentImg" />
                                            </div>
                                            </transition-group>
                                            <a style="margin-left:110px;margin-top:210px;" class="prev" @click="prev" href="#">&#10094; Previous</a>
                                            <a style="margin-right:60px;margin-top:210px" class="next" @click="next" href="#"> Next &#10095;</a>
                                        </div>
                                        
                                  </div>
                                  
                                </div>
                                 
                                <div style="margin-left:10px;font-size:17px" class="col-12 col-md-6" >
                                <h2><b>{{product_detail.data.name}}</b></h2><br>
                                  <table> 
                                     <tr>
                                <td style="width:200px"><b>Name:</b></td><td>{{product_detail.data.name}}</td><br><br>
                                   </tr> 
                                    <tr>
                                <td> <b>Company:</b></td><td>{{product_detail.data.company}}</td><br><br>
                                 </tr>
                                    <tr>
                                <td><b>Contact Person:</b></td><td>{{product_detail.data.contact_person}}</td><br><br>
                                   </tr>
                                    
                                   <tr>
                                 <td><b><i style="font-size:24px;margin-right:10px" class="far fa-address-card"></i> Address: </b></td><td>{{product_detail.data.address}}</td><br><br><br>
                                     </tr>
                                  <tr>
                                <td><b><i class="fa fa-envelope"  style="font-size:24px;margin-right:5px"></i> Alternative Email:</b></td><td> {{product_detail.data.alt_email}}</td><br><br><br>
                                  </tr>
                                  </table>
                                 <div id="userData">
                             <span  class="mobile">  <i class="fa fa-phone fa-flip-horizontal" style="font-size:18px"></i>  {{product_detail.data.country_code}},  {{product_detail.data.mobile}}</span>
                              <span class="mobile">  <i class="fa fa-envelope"  style="font-size:18px"></i>  {{product_detail.data.email}}</span>
                             <br><br>
        
                                 </div> 
                                 <div id="customerData">
                             <span  class="mobile">  <i class="fa fa-phone fa-flip-horizontal" style="font-size:18px"></i>  Show Contact Number</span>
                              <span class="mobile">  <i class="fa fa-envelope"  style="font-size:18px"></i> Show Email Address</span>
                             <br><br>
        
                                 </div> 
                                
                                   </div>
                                <!-- Add Arrows -->
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>

                            </div><br><br>
                            <div style="margin-left:50px;margin-right:50px;font-size:17px">
                             <h4> <b>Discription:</b></h4><div style="word-spacing: normal" v-html="product_detail.data.description"></div></div>
                        
                        <div>
                            <a :href="upload.upload_file" target="_blank" download>
                            <button style="margin-left:43%;margin-top:5%;background-color: #007bff;"><i class="fa fa-download" style="margin-right:10px" aria-hidden="true"></i>Download Brochure</button></a>
                            </div>
</div>
                    </div>
                </section>
                <!-- app ecommerce details end -->

            </div>
        </div>
    </div>
    <!-- END: Content-->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

  
</div>
</template>
<script>
import debounce from 'lodash/debounce'
import http from "../http-common";

import ServicesDataService from "../services/ServicesDataService";
import Unit_rigsDataService from "../services/Unit_rigsDataService";
import SupplierDataService from "../services/SupplierDataService";
import EquipmentDataService from "../services/EquipmentDataService";

    export default {
  name: "details",
  data() {
       return {
         upload:[],
          admin: [],
                selected1: null,
                isFetching1: false,
                data1: [],
         msgemail:'',
           email:'',
         description:'',
              countryData: [],
                selected: null,
                isFetching: false,
                data: [],
         show: true,
         user:[],
           product_detail:[],
           adsId:0,
            i:0,
            categoryName:'',
           category:'',
           subcategory:0,
           timer: null,
      currentIndex: 0,          
      image_slide:[],
       zoom: 14,
        center1: [],
        rotation: 0,
        icon: require('@/assetsold/marker.png'),
         center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                currentPlace:null,
                latitude:null,
                longitude:null,
           countImg:0,
           imageStore:new Map(),
      };
  },

 
  async created() {
    
    
   await EquipmentDataService.getuser()
     .then(response => {
       this.user=response.data;
       console.log(response.data)
       console.log("this.user"+this.user)
       console.log(this.user)
       console.log("this.user"+this.user)


     }) 
   

    this.adsId=this.$route.params.id;
    this.categoryName=this.$route.params.category_name;
  


         if(this.categoryName=="Services"){
            
             
     await  ServicesDataService.getservicebyid(this.adsId)
        .then(response => {
          this.product_detail = response.data;
        
           
        
           console.log(this.product_detail);
           
           this.countImg=(this.product_detail.data.Images).length;
           for(this.i=0;this.i<(this.product_detail.data.Images).length;this.i++)
           {
               this.image_slide[this.i]=this.product_detail.data.Images[this.i].image;
               this.imageStore.set(this.product_detail.data.Images[this.i].id , this.product_detail.data.Images[this.i].image);
           }
        
          })
        .catch(e => {
          console.log(e);
        });
        }
         else if(this.categoryName=="Equipments"){
            
         await EquipmentDataService.getequipmentbyid(this.adsId)
        .then(response => {
          this.product_detail = response.data;
        
           this.countImg=(this.product_detail.data.Images).length;
           for(this.i=0;this.i<(this.product_detail.data.Images).length;this.i++)
           {
               this.image_slide[this.i]=this.product_detail.data.Images[this.i].image;
               this.imageStore.set(this.product_detail.data.Images[this.i].id , this.product_detail.data.Images[this.i].image);
  
           }
          })
           .catch(e => {
          console.log(e);
        });
       
        }
         else if(this.categoryName=="Supplier"){
     await  SupplierDataService.getsupplierbyid(this.adsId)
        .then(response => {
          this.product_detail = response.data;
           this.countImg=(this.product_detail.data.Images).length;
           for(this.i=0;this.i<(this.product_detail.data.Images).length;this.i++)
           {
               this.image_slide[this.i]=this.product_detail.data.Images[this.i].image;
               this.imageStore.set(this.product_detail.data.Images[this.i].id , this.product_detail.data.Images[this.i].image);
  
           }
         })
        .catch(e => {
          console.log(e);
        });
        }
         else if(this.categoryName=="Unit_rigs"){
            
     await  Unit_rigsDataService.getunit_rigsbyid(this.adsId)
        .then(response => {
          this.product_detail = response.data;
         
           this.countImg=(this.product_detail.data.Images).length;
           for(this.i=0;this.i<(this.product_detail.data.Images).length;this.i++)
           {
               this.image_slide[this.i]=this.product_detail.data.Images[this.i].image;
               this.imageStore.set(this.product_detail.data.Images[this.i].id , this.product_detail.data.Images[this.i].image);
  
           }
          })
        .catch(e => {
          console.log(e);
        }); 
        }
        this.description=parseFloat(this.product_detail.data.description);
           console.log("this.user.id1");
           console.log(this.user);
           
       this.description=this.product_detail.data.description;
       this.upload=this.product_detail.data.upload_file[0];
      console.log(this.product_detail);
  if((this.user.user.id)==(this.product_detail.data.user_id))
  {
    
    document.getElementById("update").style.display="block";
 document.getElementById("imageEdit").style.display="block";
  document.getElementById("userData").style.display="block";
   document.getElementById("customerData").style.display="none";
  }
  else{
    document.getElementById("update").style.display="none";
 document.getElementById("imageEdit").style.display="none";
 document.getElementById("userData").style.display="none";
   document.getElementById("customerData").style.display="block";
  }
this.center1=[parseFloat(this.product_detail.data.longitude),parseFloat(this.product_detail.data.latitude)];
console.log("this is center");
console.log(this.center1);
  http.get('./api/countryflag')
                    .then(response => {
                        this.countryData=[];
                        this.countryData =response.data;
                    })
                    .catch((error) => {
                        this.countryData = []
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
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
                     
  },

    mounted: function() {
    this.startSlide();
  },

  methods: {
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
            }, 500),
    deletePost: async function(event){
         event.preventDefault();
                 if(this.categoryName=="Services"){
                 let response =  await  ServicesDataService.deleteImg(this.adsId)
                      console.log(response);
                       
                
                 let response1 = await  ServicesDataService.delete(this.adsId)
                    console.log(response1);
                       location.replace("/Services");
                 }

                 else if(this.categoryName=="Equipments"){
                  let response = await EquipmentDataService.deleteImg(this.adsId)
                        console.log(response);
                      
                   
                  let response1 = await EquipmentDataService.delete(this.adsId)   
                        console.log(response1);   
                     location.replace("/Equipments");
                        
                 }
                  else  if(this.categoryName=="Supplier"){
                     let response = SupplierDataService.deleteimg(this.adsId)
                        console.log(response);
                         location.replace("/Supplier");
                        
                    
                    let response1 = SupplierDataService.delete(this.adsId)
                        console.log(response1);
                         location.replace("/Supplier");
          
                 }
                  else  if(this.categoryName=="Unit_rigs"){
                    let response = Unit_rigsDataService.deleteimg(this.adsId)
                        console.log(response);
                         location.replace("/Unit_rigs");
                        
                    
                    let response1 = Unit_rigsDataService.delete(this.adsId)
                        console.log(response1);
                    
                         location.replace("/Unit_rigs");
                 }
    },
   
    updateAds: async function(event){
      event.preventDefault();
      if(document.getElementById("updatePost").reportValidity()){
       document.getElementById("imageForm").style.opacity = 0.5;
          document.getElementById("imageLoader").style.display="block";
          console.log(this.description);
      const params = new URLSearchParams();
      
            Array.from(new FormData(document.getElementById("updatePost")).entries())
             .forEach(element => {
               if(typeof element[1] != "undefined" && element[1] !="") 
                params.append(element[0],element[1]);
                
               });
               console.log(this.selected);
                if((this.selected)!=null)
                
                  {
                       params.append("country_code" ,  this.selected.countryNumberCode);
                  }
            
                if((this.selected1)!=null)
                        {
                          console.log(this.selected1.id);
                            params.append("admin" ,  this.selected1.id);
                        }
              
                
                 if((this.description)!=null)
                 {
                   params.append("description",this.description);
                 }
               if(this.currentPlace!=null){
                       
                     params.append("address" ,this.currentPlace.formatted_address );
                     console.log(this.latitude);
                     console.log(this.longitude);
                       params.append("latitude" ,this.latitude); 
                      params.append("longitude" ,this.longitude);   
                     }

                 if((document.getElementById("brochure").files.length)==1){
                   var formData = new FormData();
                   if(this.categoryName=="Services"){
                       await  ServicesDataService.deleteBrochure(this.adsId)
                        .then(response=>{
                        console.log(response.data);
                        });
                    formData.append("service_id" ,this.adsId);
                    formData.append("upload_file" ,document.getElementById("brochure").files[0]);

                     await  ServicesDataService.postBrochure(formData)
                        .then(response=>{
                          this.upload=response.data.data;
                        });

                   }
                    if(this.categoryName=="Equipments"){
                       await  EquipmentDataService.deleteBrochure(this.adsId)
                        .then(response=>{
                        console.log(response.data);
                        });
                    formData.append("equipment_id" ,this.adsId);
                    formData.append("upload_file" ,document.getElementById("brochure").files[0]);
                     await  EquipmentDataService.postBrochure(formData)
                        .then(response=>{
                          this.upload=response.data.data;
                        });

                   }
                    if(this.categoryName=="Supplier"){
                       await  SupplierDataService.deleteBrochure(this.adsId)
                        .then(response=>{
                        console.log(response.data);
                        });
                    formData.append("supplier_id" ,this.adsId);
                    formData.append("upload_file" ,document.getElementById("brochure").files[0]);
                     await  SupplierDataService.postBrochure(formData)
                        .then(response=>{
                          this.upload=response.data.data;
                        });

                   }
                    if(this.categoryName=="Unit_rigs"){
                       await  Unit_rigsDataService.deleteBrochure(this.adsId)
                        .then(response=>{
                         console.log(response.data);
                        });
                    formData.append("service_id" ,this.adsId);
                    formData.append("upload_file" ,document.getElementById("brochure").files[0]);
                     await  Unit_rigsDataService.postBrochure(formData)
                        .then(response=>{
                          this.upload=response.data.data;
                        });

                   }
                 }

                 if(this.categoryName=="Services"){
                  
                       
             await  ServicesDataService.getupdate(this.adsId,params)
                    .then(response=>{
                         this.product_detail=response.data;
                        alert("Successfully updated !");
                      
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                 }
                 else  if(this.categoryName=="Equipments"){
                  await   EquipmentDataService.getupdate(this.adsId,params)
                    .then(response=>{
                         this.product_detail=response.data;
                       alert("Successfully updated !");
                       
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                 }
                  else  if(this.categoryName=="Supplier"){
                  await    SupplierDataService.getupdate(this.adsId,params)
                    .then(response=>{
                         this.product_detail=response.data;
                       alert("Successfully updated !");
                        
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                 }
                  else  if(this.categoryName=="Unit_rigs"){
                   await  Unit_rigsDataService.getupdate(this.adsId,params)
                    .then(response=>{
                         this.product_detail=response.data;
                       alert("Successfully updated !");
                        
                    })
                    .catch(e=>{
                        console.log(e);
                          this.message="Invalid Credentials "
            });
                 }
         document.getElementById("imageForm").style.opacity = 1;
          document.getElementById("imageLoader").style.display="none";
         document.getElementById("editForm").style.display="none";
this.center1=[parseFloat(this.product_detail.data.longitude),parseFloat(this.product_detail.data.latitude)];
       }
     },

    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },

 deleteForm:function () {
  document.getElementById("deleteForm").style.display = "block";
},
closedeleteForm:function () {
  document.getElementById("deleteForm").style.display = "none";
},

editForm:function () {
  document.getElementById("editForm").style.display = "block";
},
imageForm:function () {
  document.getElementById("imageForm").style.display = "block";
},

 closeEditForm:function () {
  document.getElementById("editForm").style.display = "none";
},
 closeImgForm:function () {
  document.getElementById("imageForm").style.display = "none";
},
deleteImage:function(id){
         document.getElementById("imageForm").style.opacity = 0.5;
          document.getElementById("imageLoader").style.display="block";
           if(this.categoryName=="Services"){
            let response = ServicesDataService.deleteImgById(id)
                      console.log(response);
                 }

                 else if(this.categoryName=="Equipments"){
                  let response =  EquipmentDataService.deleteImgById(id)
                        console.log(response);
                        
                 }
                  else  if(this.categoryName=="Supplier"){
                     let response = SupplierDataService.deleteImgById(id)
                        console.log(response);
  
                 }
                  else  if(this.categoryName=="Unit_rigs"){
                    let response = Unit_rigsDataService.deleteImgById(id)
                        console.log(response);
                      
                 }
                 this.imageStore.delete(id);
                  document.getElementById("imageForm").style.opacity = 1;
                   document.getElementById("imageLoader").style.display="none";
},
      addImage: async function(event){
               event.preventDefault();
                
                document.getElementById("imageForm").style.opacity = 0.5;
                 document.getElementById("imageLoader").style.display="block";
              
                var formData = new FormData();
                if(((this.$refs.file.files).length)+ (this.imageStore.size)>5){
                       alert("you can't add images more than 5");
                        document.getElementById("imageForm").style.opacity =1;
                 document.getElementById("imageLoader").style.display="none";
                    }
                    else{
                       
                         for( var i = 0; i < this.$refs.file.files.length; i++ ){
                        let file = this.$refs.file.files[i];
                     console.log(file);
                    formData.append('image[' + i + ']', file);
                      }
                    }
                  if(this.categoryName=="Services"){
               formData.append("service_id" ,this.adsId);
                let response =  await ServicesDataService.postImg(formData)
                response.data.data.forEach(image =>  this.imageStore.set(image.id,image.image))
                      console.log(response);
                      
                 }

                 else if(this.categoryName=="Equipments"){
                  formData.append("equipment_id" ,this.adsId);
                   let response1 =await  EquipmentDataService.postImg(formData)
                   console.log(response1.data);
                    response1.data.data.forEach(image =>  this.imageStore.set(image.id,image.image))
                        console.log(response1.data);
                        
                 }
                  else  if(this.categoryName=="Supplier"){
                    formData.append("supplier_id" ,this.adsId);
                     let response3 = await SupplierDataService.postImg(formData)
                      response3.data.data.forEach(image =>  this.imageStore.set(image.id,image.image))
                        console.log(response3);
                 }
                  else  if(this.categoryName=="Unit_rigs"){
                     formData.append("unit_rigs_id" ,this.adsId);
                     let response4 = await Unit_rigsDataService.postImg(formData)
                      response4.data.data.forEach(image =>  this.imageStore.set(image.id,image.image))
                        console.log(response4);
                      
                 }
                 
 document.getElementById("imageForm").style.opacity =1;
 document.getElementById("imageLoader").style.display = "none";
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
 
  getAsyncData:  debounce(function (countryName) {
              console.log("flag");
                if (!countryName.length) {
                    this.data = []
                    return
                }
                 console.log("flag1");
                this.isFetching = true
                this.data = []
                 this.countryData.forEach((item) => {
                    if(item.countryName.toLowerCase().includes(countryName.toLowerCase()))
                        this.data.push(item);
                });
                console.log("flag2");
                console.log(this.selected);
                 console.log(this.isFetching);
                this.isFetching = false;
            }, 500)


  },

  computed: {
    currentImg: function() {
        
      return this.image_slide[Math.abs(this.currentIndex) % this.image_slide.length];
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
 
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 20%;
  width: auto;
  padding: 5px;
  color: black;
  font-weight: bold;
  font-size: 10px;
  transition: 0.7s ease;
  
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.prev:hover, .next:hover {
  background-color:skyblue;
}
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Button used to open the contact form - fixed at the bottom of the page */
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  position: fixed;
 margin-bottom: 100px;
  margin-right:300px;
  right: 15px;
width:800px;
height:500px;
  z-index: 9;
 
}

/* Add styles to the form container */
.form-container {
  max-width: 800px;
  margin-top:20px;
  background-color: white;
  margin-right:300px;
  margin-bottom:500px;
  
 
}
.form-container1 {
  max-width: 800px;
  background-color: white;
  
 
}

/* Full-width input fields */
.form-container input[type=text], .form-container input[type=password] {
  width: 100%;
 
 
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn ,.cancel{
  height:40px;
  margin-left:70px;
  width:100px;
 background-color:#51BBEE;
 color:black;
 box-shadow: 10px 10px 5px #AFACA6;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: #51BBEE;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .open-button:hover {
  opacity: 0.7;
 
}
.closebuttton{
  float:right;
  height:35px;
    background-color: #ddd;
    color:black; 
}
.closebuttton:hover {
background-color: red;
}
.btn:hover{
  background-color:red;
}
.cancel:hover{
  background-color:#51BBEE;
}
.close {
  cursor: pointer;
  position: absolute;
  top: 16%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}

.close:hover {background: #bbb;}
.close2 {
  cursor: pointer;
  position: absolute;
  top: 10%;
  right: 0%;
  padding: 12px 18px;
  transform: translate(0%, -50%);
}

.close2:hover {background: #bbb;}
.close1 {
  cursor: pointer;
  position: absolute;
  right:0%;
  top:2%;
  padding:12px 18px;
  transform: translate(0%, -50%);
}

.close1:hover {background: #bbb;}



.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container image {
  width: 100%;
  height: auto;
}

.container .button {
  position: absolute;
  top: 84%;
  left: 77%;
  transform: translate(-1%, -1%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .botton:hover {
  background-color: blue;
}
#carousel {
    width: 100%;
    height: 150px;
   margin-right:30px;
    margin-top:40px;
    overflow: visible;
    white-space:nowrap;
}

#carousel .slide {
    display: inline-block;
    margin-left:30px;
   
}
    
.dButton{
  margin-left:5px;
  background-color: #007bff;
  border-radius:40px;
}
.dButton:hover{
  background-color:#bbb;
}
.signupbtn{
float:right;
margin-right:20px;
 background-color: #007bff;
 border-radius:20px;
} 
.signupbtn:hover{
 opacity: 0.7;
} 
.mobile{
  padding: 7px 10px;
  color:  white;
  border-radius: 20px;
  background-color:#007bff;
  margin-right:20px
}
.mobile:hover{
 opacity: 0.7;
} 
#loader {
  display:block;
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top:6px solid #3498db;
  margin-left:300px;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#imageLoader{
  display:none;
}
.imgHover:hover{
opacity:0.5;
 color:red;
}
.addimage:hover{
  opacity:0.5;
}
.pac-container .pac-item{
  z-index: 1051 !important;
}
.ui-autocomplete {
    z-index: 1051 !important;
}
#pac-container{
  z-index:1051;
 

}
.modal {
  z-index: 1;
}
</style>
