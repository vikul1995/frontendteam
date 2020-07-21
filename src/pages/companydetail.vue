<template>
<div>
<div class ="app-content content" style="padding:30px">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper">
                    <div class="content-header row">
                        <div class="content-header-left col-md-9 col-12 mb-2">
                            <div class="row breadcrumbs-top">
                                <div class="col-12" style="padding-bottom:20px">
                                    <h2 class="content-header-title float-left mb-0"><b>Company  Details
                                    </b></h2>
                                 </div>
                            </div>
                        </div>
                        <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                            <div class="form-group breadcrum-right">
                                <div class="dropdown">
                                    <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Chat</a><a class="dropdown-item" href="#">Email</a><a class="dropdown-item" href="#">Calendar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 <div class="content-body">
  <div class="employer-info" style="padding-bottom:20px">
  <h1 style=" color: #007bff;"><center><b>{{company.data.name}}</b></center></h1>  
  </div>
  <div style="height:300px;width:100%;padding-left:5px;padding-bottom:90px">
  <vl-map data-projection="EPSG:4326" style="height: 300px; padding-bottom:50px">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile>
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-feature  >
      <vl-geom-point :coordinates="[parseFloat(company.data.longitute),parseFloat(company.data.latitute)]"></vl-geom-point>
        <vl-style-box>
          <vl-style-icon :src="icon" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
          <vl-style-text :text="company.data.name" font="14px  bold italic large" textAlign="left" style="color: red"></vl-style-text>
        </vl-style-box>
    </vl-feature>
    <vl-interaction-select :features.sync="selectedFeatures"/>
  </vl-map>
  </div>
         <div class="gap">
      <div class="container remove_data" >
        <input type="hidden" id="lat" value="">
        <input type="hidden" id="long" value="">
        <input type="hidden" id="address" value="Corporate Avenue, Sonawala Road, Sonawala Industry Estate, Goregaon East, Mumbai, Maharashtra 400063, India">
  <div class="row show_msg">
    <div class="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
    <div class="company-intro">           
      <figure class="pull-Right" style= "padding:20px">
      <img :src="company.data.image" class="img-fluid" style="height: 250px; padding:30px">
      </figure>
    </div>
    </div>
    <div class="col-lg-6">
    <div class="employer-info" style="margin-top:5px; padding:20px">
      <input type="hidden" id="check_email" value="">
        <ul>
          <span><B><i class="fa fa-building-o" aria-hidden="true"></i> CompanyName:</B></span>{{company.data.name}}<br>
          <br>
          <span><B><i class="fa fa-link" aria-hidden="true"></i> Website Url:</B></span>{{company.data.website_url}}<br>
          <br>
           <span><i class="fa fa-envelope" aria-hidden="true"></i>Email:</span>{{company.data.email}}<br>
           <br>     
            <span><i class="fa fa-envelope" aria-hidden="true"></i>Alternate Email:</span>{{company.data. alt_email}} <br>
             <br>   
            <span><i class="fa fa-calendar" aria-hidden="true"></i>FoundedYear:</span>{{company.data.founded_date}}<br>
            <br>
            <span><i class="fa fa-address-card-o" aria-hidden="true"></i> Address:</span> {{company.data.address}}<br>
            <br>
            <span><i class="feather icon-help-circle"></i>Comapany Size:</span> {{company.data.c_size}}<br>
            <br>    
        <span><i class="feather icon-help-circle"></i>Company Type:</span> {{company.data.c_type}}<br>
          <br>      
        </ul>
        <div>
                <a :href="company.data.upload_file" target="_blank"  download>
                <button style="margin-left:40px;background-color: #007bff;"><i class="fa fa-download" aria-hidden="true"></i> Brochure</button></a>
                </div>
        </div>
                </div>
        <br>
        <br>
         <div class="float-right">
            <button onclick="document.getElementById('id01').style.display='block'" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width: auto;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
             <div class="clearfix">
              <button type="button" v-on:click="DeleteInfo($event)" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1" style="width: auto;"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>

      <div id="id01" class="modal">
               
  <form class="modal-content" id="company" style="overflow-y: scroll; width:50%; height:90%; Position:relative;">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                        <div class="container">
                            <h1 style="color:#33A8FF;font-family:Times New Roman;"><b>Update Company Details</b></h1>
                             <hr>
                             <label for="Company Name"><b>Company Name *</b></label>
                                <input type="text" placeholder="company name"  name="name" class="form-control" required v-model="company.name">
                             <label for="Website URL"><b>Website URL *</b></label>
                               <input type="url" placeholder="Website URL"  pattern="https?://.+" name="website_url" required class="form-control" v-model="company.website_url">
                             <label for="Email"><b>Email *</b></label>
                                <input type="email" placeholder="Email" required name="email" class="form-control" v-model="company.email">
                             <label for="Alt_Email"><b>Alternate Email *</b></label>
                                 <input type="email" required placeholder="Alt_Email"  name="alt_email" class="form-control" v-model="company.alt_email">
                             <label for="C_Size"><b>Company Size *</b></label>
                                  <input type="number" placeholder=""  required name="c_size" class="form-control" v-model="company.c_size">
                             <label for="Company Type"><b>Company Type *</b></label>
                                  <input type="text" required placeholder="Company Type" name="c_type" class="form-control" v-model="company.c_type">
                             <label for="Address"><b>Address *</b></label>
                                   <input type="text" placeholder=""  name="address" required class="form-control" v-model="company.address">
                             <label for="Founded_Date"><b>Founded Date *</b></label>
                                 <input type="month" placeholder="" required name="founded_date" class="form-control"  v-model="company.founded_date">
                                 <br>
                             <label for="Company Detail"><b>CompanyDetails*</b></label><br>
                                <textarea style="height:200px;width:600px" name="company_details" v-model="company.company_details" ></textarea>
                              <label for="Image"><b>CompanyImage*</b></label><br>
                                <input type="file" id="img" name="image" accept="image/*"  required  multiple="multiple"/>
                                <br>
                                 <label for="Brochure"><b>CompanyBrochure*</b></label><br>
                                 <input type="file" id="c_brochure" name="Brochure"   accept="image/*"  required  multiple="multiple"/>

                               
                          <hr> 
                                    <div class="clearfix">
                                        <button type="button" @click="saveInfo($event)">Update</button>
                                    </div>
                                   
                       </div>
                    </form>
            </div>
        </div><!-- update form end-->

        <div class="job-detail" style="margin-left:15px">
        <h4><b>Company Details</b></h4>
        {{company.data.company_details}}  
                </div>
    </div>
        </div>
                       
    </div>
    
    </div> 
</div>


                <!-- app ecommerce details end -->
                




        
    
    <!-- END: Content-->
  
  
     <div>
     </div>
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
    
     
  
 </div>
 </div>
</template>
<script>
import companyservice from "../services/companyservice";
export default {
  name: "company",
  data() {
    return {
    zoom: 14,
        center: [73.913044,18.597590],
        rotation: 0,
        icon: require('@/app-assets/marker.png'),
        
      company: [],
      id:'',
      };
  },
  created() {
      this.id=document.cookie .split('; ') .find(row => row.startsWith('companyid')) .split('=')[1];
      console.log(this.id);
       companyservice.getcompanys(this.id)
        .then(response => {
          this.company = response.data;
          console.log(this.company.data.longitute);

          });
           let coordinates = [parseFloat(this.company.data.longitude),parseFloat(this.company.data.latitude)];
          this.center.push(coordinates);
          
          
    },
    methods:{
  saveInfo(event){
                event.preventDefault();
              
          const params = new URLSearchParams();
          Array.from(new FormData(document.getElementById("company")).entries())
          .forEach(element => {
               if(typeof element[1] != "undefined" && element[1]!="") 
                params.append(element[0],element[1])
               });
               companyservice.updatecompany(this.id,params)
                    .then(response=>{
                        this.company=response.data;
                        console.log(response.data);
                        console.log("Successfully saved !");
                        alert("Detail Added");
                        location.replace("/company")
                        
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
            });
            },
            
   DeleteInfo:function(event){
                      event.preventDefault();
                companyservice.Deletecompany(this.id)
                .then(response => {
          this.company = response.data; 
          console.log("Successfully Delete !");
          alert("Delete Details");
          console.log(this.company);
          location.replace("/company")
       
       
        })
        .catch(e => {
          console.log(e);
        });
      }
      }
    
};
</script> 
 <style>
      body {font-family: Arial, Helvetica, sans-serif;}
      * {box-sizing: border-box;}
      
      / Full-width input fields /
      input[type=text], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 1px solid black;
      }
      
      / Add a background color when the inputs get focus /
      input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
      }
      
      / Set a style for all buttons /
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 12px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 5%;
        opacity: 0.9;
      }
      
      button:hover {
        opacity:1;
      }
      
      / Extra styles for the cancel button /
      .cancelbtn {
        padding: 10px 12px;
        background-color: #f44336;
      
      }
      
      / Float cancel and signup buttons and add an equal width /
      .cancelbtn, .signupbtn {
        float: right;
        width: 10%;
      }
      
      / Add padding to container elements /
      .container {
        padding: 16px;
      }
      
      / The Modal (background) /
      .modal  {
        display: none; 
        position: fixed;
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: black;
        padding-top: 50px;
      }
      
      
      .modal-content {
        background-color: #fefefe;
        margin: auto; 
        border: 1px solid #888;
        padding: 20px;
        width: 80%; 
        }
      
      
      hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
      }
       
      
      .close {
        position: absolute;
        right: 35px;
        top: 55px;
        font-size: 40px;
        font-weight: bold;
        color: #f1f1f1;
      }
      
      .close:hover,
      .close:focus {
        color: #f44336;
        cursor: pointer;
      }
      
      
      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }
      
      
      @media screen and (max-width: 300px) {
        .cancelbtn, .signupbtn {
           width: 100%;
        }
      }
              
             
      
              
          
              </style>
