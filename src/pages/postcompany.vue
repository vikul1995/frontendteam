  <template>
    <div id="postscompany">
    <div class="app-content content" >
        
        <div class="content-wrapper" >
            
        <div class="content-body" >
        <section class="basic-select2" >
                    <div class="row" >
                        <div class="col-12">
                            <div class="card" >
                                <div class="card-header">
                                    <h4 class="card-title">Create Company Information:</h4>
                                </div>
                                 <div class="card-content" >
                                    <div class="card-body" style=" background-color: #0C1A3F ">
                                        
                      
                                        <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <div class="card-header">
                            <h4 class="card-title">Select Images to upload</h4>
                          </div>
                          <div class="card-content">
                            <div class="card-body">
                              
                              <label class="file-select">
                              <input type="file" id="img" name="image" accept="image/*"  required  multiple="multiple"/>
                                 </label>
                            
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
                                                          <label for="name"> Company Name </label>
                                                          <i style="color:red">{{msgname}}</i>
                                                        <input style="width:100% " type="text" class="form-control" placeholder="Company Name" name="name" v-model="company.name" required  >
                                                </fieldset>
                                            </div>
                                            <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="url">Website URL</label>
                                                    <i style="color:red">{{msgwebsite_url}}</i>
                                                    <input type="url" id="url" class="form-control"  placeholder="https://example.com"
                             pattern="https://.*"  name="Website URL" v-model="company.website_url" required  >
                                                </fieldset>
                                            </div>
                                             <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Email">Email</label>
                                                    <i style="color:red">{{msgemail}}</i>
                                                    <input style="width:100% "  type="email"  class="form-control" placeholder="E-mail" name="email" v-model="company.email" required >
                                                    
                                                </fieldset>
                                            </div>
                                             <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Alternative Email">Alternative Email</label>
                                                    <i style="color:red">{{msgaltemail}}</i>
                                                    <input type="email" style="width:100% " class="form-control" placeholder="altervative E-mail" name="alt_email" v-model="company.alt_email" required >
                                                    
                                                </fieldset>
                                            </div>
                                             <div  class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Conatctno">Company Size</label>
                                                    <i style="color:red">{{msgcsize}}</i>
                                                    <input
                                                    style="width:150px" type="number"  class="form-control" placeholder="Company Size" name="Company Size" required  v-model="company.c_size" min="1" max="1000">
                                                    
                                                </fieldset>
                                            </div>
                                            <div class="col-sm-6 col-12">
                                                <fieldset class="form-group">
                                                    <label for="Conatctno">Company Type</label>
                                                    <i style="color:red">{{msgctype}}</i>
                                                    <input type="text"  class="form-control" placeholder="Company Type" required  name="Company Type" v-model="company.c_type">
                                                    
                                                </fieldset>
                                            </div>
                                            
                                            
                                            <div class="col-12">
                                                <fieldset class="form-group">
                                                    <label for="disabledInput">Founded Year</label>
                                                    <i style="color:red">{{msgfoundeddate}}</i>
                                                    <input type="month" class="form-control" style="width:50% "  placeholder="Founded Year" required name="Founded Year"  v-model="company.founded_date">
                                                
                                                </fieldset>
                                            </div>
                                              <div class="col-12">
                                                <fieldset class="form-group">
                                                    <label for="disabledInput">Address</label>
                                                    <i style="color:red">{{msgaddress}}</i><br>
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
                      <h2 class="card-title">Company Details</h2>
                    </div>
                                <div class="card-content collapse show">
                                    <div class="card-body">
                    
                                        
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div id="full-wrapper">
                                                    <div id="full-container">
                                                        <div class="editor">
                                                            <i style="color:red">{{msgdetails}}</i>

                                                            <p><br></p>
                                                            <textarea style="height:200px;width:600px" name="description" v-model="company.company_details"></textarea>
                                                            <p style="text-align:left ; font-size:14px">Describe your add Details here.</p><i style="color:red"></i>
                                                            <p><br></p>
                              <p><br></p>
                              <p><br></p>
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
                <section id="basic-input">
                                          <div class="row">
                                            <div class="col-md-12">
                                              <div class="card">
                                                  <div class="card-header">
                                                  <h4 class="card-title">Select Company Brochure to upload</h4>
                                                </div>
                                                <div class="card-content">
                                                  <div class="card-body">
                                                    <label class="file-select">
                                                      <input type="file" id="c_brochure" name="Brochure"   accept="image/*"  required  multiple="multiple"/>
                                                    </label>
                                                  </div>
                                                </div>
                                              
                                    
                            </div>
                        </div>
                    </div>
                </section>

                

                
                
                                            <div class="form-group">  
                        <div class="checkbox" >
                          <label>
                            <input type="checkbox" required=""><i class="check-box" ></i><b style="font-size:15px ;color:white">  By clicking "create Company", you agree to our Terms of Use and Privacy Policy and acknowledge that you are the rightful owner of this item.</b>
                          </label>
                        </div>
                      </div>
                      <button type="button" class="btn bg-gradient-primary mr-1 mb-1" @click="savecompany($event)">Submit</button>
                      <button style="float:right" class="btn bg-gradient-primary mr-1 mb-1" @click="closeWindow()">Close</button>
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
 
 import DataService from "../services/DataService";
 export default {
    
        data() {
            return {
               
               reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
               
              
               center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                currentPlace:null,
                latitute:null,
                longitute:null,
                 msgname:'',
                msgwebsite_url:'',
                msgaddress:'',
                msgemail:'',
                msgaltemail:'',
                msgcsize:'',
                msgctype:'',
                msgfoundeddate:'',
                msgdetails:'',
                msgimage:'',
                msgbrochure:'',
                
               
                company:{

              name:'',
              website_url:'',
              address:'',
              email:'',
              alt_email:'',
              c_size:'',
              c_type:'',
              founded_date:'',
              company_details:'',
              image:'',
              upload_file:''

             },
                submitted: false,
                message:''
            };
        },
        methods: {
            savecompany(event){
                 event.preventDefault();
                var formData = new FormData();

                       if ((this.company.name)<1){
                       this.msgname=" *Please Enter the Company Name";
                   }
                   else{
                       this.msgname='';
                      formData.append("name" ,this.company.name);
                      }
                      if ((this.company.website_url)<1){
                       this.msgname=" *Please Enter the  url";
                   }
                   else{
                       this.msgwebsiteurl='';   
                      formData.append("website_url" ,  this.company.website_url);
                      }
                       
                     if(this.currentPlace==null){
                          this.msgaddress="please enter  your address";
                            
                        }
                    else{
                         this.msgaddress=''; 
                      formData.append("address" ,this.currentPlace.formatted_address );
                     formData.append("latitute" ,this.latitute); 
                      formData.append("longitute" ,this.longitute); 
                      }
                      if(this.company.email == null || this.company.email == '')
                            {
                          this.msgemail = "Please Enter Email";
                               }
                         else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.company.email))
                         {
                             this.msgemail='';   
                      formData.append("email" ,  this.company.email);
                      }
                       else{
                         this.msgemail= "Please Enter Correct Email  ";
                     }
                     if(this.company.alt_email == null || this.company.alt_email == '')
                            {
                          this.msgaltemail = "Please Enter Alternate Email";
                               }
                         else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.company.email))
                         {
                             this.msgaltemail='';   
                      formData.append("alt_email" ,  this.company.alt_email);
                      }
                       else{
                         this.msgaltemail= "Please Enter Correct Alternate Email  ";
                     }
                      
                    if ((this.company.c_size)<1){
                       this.msgcsize=" *Please Enter the company size ";
                   }
                   else{
                       this.msgcsize='';
                      formData.append("c_size" , this.company.c_size);
                      }
                      if ((this.company.c_type)<1){
                       this.msgctype=" *Please Enter the company Type  ";
                   }
                   else{
                       this.msgctype='';
                     formData.append("c_type" , this.company.c_type);
                     }
                     if ((this.company.founded_date)<1){
                       this.msgfoundeddate=" *Please Enter the Date";
                   }
                   else{
                       this.msgfoundeddate='';
                     formData.append("founded_date" ,this.company.founded_date);
                     }
                     if ((this.company.company_details)<1){
                       this.msgdetails=" *Please Enter the company details";
                   }
                   else{
                       this.msgdetails='';
                     formData.append("company_details" , this.company.company_details);
                     }
                    formData.append("upload_file" , document.getElementById("c_brochure").files[0]);
                formData.append("image" , document.getElementById("img").files[0]);
                formData.append("upload_file" , document.getElementById("c_brochure").files[0]);
                console.log( document.getElementById("img").files[0]);
                console.log(document.getElementById("c_brochure").files[0]);
                console.log(formData)
                DataService.company(formData)
                    .then(response=>{
                        this.company.id=response.data.id;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail succesfully  Added");
                        location.replace("/company");

                        
                    })
                    
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                    

            },
            closeWindow: function () {    
              location.replace("/company");

                
 
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
        this.latitute=marker.lat;
         this.longitute=marker.lng;
        console.log(this.latitute);
         console.log(this.longitute);
        
      }
    },
   
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
            
        }
        
    }
</script>
 
<style>
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


v-on:click="DeleteInfo($event)"

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
</style>