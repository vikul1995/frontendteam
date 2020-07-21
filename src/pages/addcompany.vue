<template>
<div>
 <div class="app-content content" style="margin-left:270px">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">Company Input Fields</h2>
                            <div class="breadcrumb-wrapper col-12">
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
    <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
        <div class="form-group breadcrum-right">
                        
                    </div>
                </div>
            </div>
            <form>
            <div  class="row">
    <div  style="margin-left:20px" class="col-25">
        <label for="Cname">Company Name</label>
      </div>
      <div style="margin-left:20px" class="col-75">
        <input type="text" id="cname" name="name" value="abs" placeholder="Company " required  v-model="company.name" >
      </div>
    </div>
    <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="lname">Website url </label>
      </div>
      <div style="" class="col-75">
        <input type="text" id="url" name="website_url" value="abs" placeholder="url" required  v-model="company.website_url">
      </div>
    </div>
    <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Address">Address</label>
      </div>
      <div style="" class="col-75">
        <input type="text" id="address" name="address" value="abs" placeholder="address"  required  v-model="company.address">
      </div>
  </div>
  
    <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Email">Email</label>
      </div>
       <div style="" class="col-75">
        <input type="text" id="Email" name="email" value="abs" placeholder="exa@.com" required  v-model="company.email">
      </div>
    </div>
    <div  style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Alternate Email">Alternate Email</label>
      </div>
       <div style="" class="col-75">
        <input type="text" id="Alternate Email" value="abs" name="alt_email" placeholder="exa@.com" required  v-model="company.alt_email">
      </div>
  </div>
  <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Company Size">Company Size</label>
      </div>
       <div style="" class="col-75">
        <input type="text" id="company size" name="c_size" value="abs" placeholder="size" required  v-model="company.c_size">
      </div>
  </div>
  <div  style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Company Type">Company Type</label>
      </div>
       <div style="" class="col-75">
        <input type="text" id="Company_Type" name="c_type" value="abs" placeholder="c_type" required  v-model="company.c_type">
      </div>
  </div>
  <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="Founded Date">Founded Date</label>
        
         <div style="" class="col-75">
        <input type="date" id="Founded_Date" name="founded_date" value="abs" placeholder="date" required  v-model="company.founded_date" >
      </div>
      </div>
  </div>
    <div style="margin-left:10px" class="row">
      <div class="col-25">
        <label for="subject">Discription</label>
      </div>
      <div class="col-75">
        <textarea id="Company_Description" name="company_details" value="abs" placeholder="Data.." style="height:200px" required  v-model="company.company_details"></textarea>
      </div>
    </div>
    <div  style="margin-left:10px; width:250px" class="row">
      <div class="col-25">
        <label for="Company_Image">Company Image</label>
         <div style="" class="">
          <input type="file" id="img" name="image" accept="image/*"  required >
      </div>
      </div>
  </div>
  <div  style="margin-left:10px; width:250px" class="row">
      <div class="col-25">
        <label for="Company Brochure">Company Brochure</label>
         <div style="" class="">
         
          <input type="file" id="c_brochure" name="brochure" accept="image/*"  required >
      </div>
      </div>
  </div>
  <br>
  <br>

    <div style="margin-left:20px; width:250px" class="row">
      <input type="submit" @click="savecompany($event)" value="Submit">
    </div> 

            </form>
           </div>
</div>
</template>
<script>
 import DataService from "../services/DataService";
 export default {
        data() {
            return {
            
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
                formData.append("name" ,this.company.name);
                formData.append("website_url" ,this.company.website_url);
                formData.append("address" , this.company.address);
                formData.append("email" ,  this.company.email);
                formData.append("alt_email" , this.company.alt_email);
                formData.append("c_size" , this.company.c_size);
                formData.append("c_type" , this.company.c_type);
                formData.append("founded_date" ,this.company.founded_date);
                formData.append("company_details" , this.company.company_details);
                formData.append("image" , document.getElementById("img").files[0]);
                formData.append("upload_file" , document.getElementById("c_brochure").files[0]);
                
                console.log(formData)
                DataService.company(formData)
                    .then(response=>{
                        this.company=response.data;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        
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
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
    }

.row:after {
  content: "";
  display: table;
  clear: both;
    }

  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }


</style>

