<template>
<div>
 <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper">
                <div class="content-header row">
                    <div class="content-header-left col-md-9 col-12 mb-2">
                        <div class="row breadcrumbs-top">
                            <div class="col-12">
                                <h2 class="content-header-title float-left mb-0">Company </h2>
                            </div>
                        </div>
                    </div>
                    <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                        <div class="form-group breadcrum-right">
                            <div class="dropdown">
                                <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Chat</a><a class="dropdown-item" href="#">Email</a><a class="dropdown-item" href="#">Calendar</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-body">
                    <!--wishlist start-->
                    <div class="row" id="myUL" style=" text-align: -webkit-center;">
                        <!--<div class="col-lg-12 " id='myUL'>-->
                        <div v-for="companys in company.data.data" :key="companys">
                            <div  style="height:330px;width:260px;"><!--space div-->
                             <router-link to="/companydetail">
                             <div class="card ecommerce-card" @click="cookie(companys.id)" style="height:300px;width:230px;">
                             
                                    <div class="item-img text-center">
                                              <div class="g-post-classic" style="width:100%"><span class="col-lg-3 col-sm-6 ncc" style=" margin-bottom: 25px; margin-top: 25px;"><a href=""></a></span>
                                            <figure><span class="col-lg-3 col-sm-6 ncc" style=" margin-bottom: 25px; margin-right: 25px;" >
                                                <img alt="" :src="companys.image" class="img-fluid" style="width: 200px;height: 130px;"></span></figure>
                                                    <div style="height:10px"></div>
                                                    <div class="g-post-meta" style="height:40px">
                                                        <div style="height:20px;">
                                                         <h4><center>{{companys.name}}</center></h4>

                                                         <h5><span class="col-lg-3 col-sm-6 ncc" style=" margin-bottom:px; margin-top:25px;">
                                                            <div style="height:60px;width:200px;display:block;overflow:hidden;margin-right:15px;margin-left:10px">
                                                            <h5>{{companys.company_details}}</h5>
                                                         </div>
                                                        </span></h5>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                                                   
                                    </div></router-link>        
                                </div><!--for loop-->
                                
                            </div>
                            </div>
                            
            <!--wishlist end-->
        </div>   
                <!-- END: Content-->
        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>
        <hr>
        <!-- BEGIN: Footer-->
    
      </div>  
    </div>
    </div>
</template>
<script>
import ServicesDataService from "../services/ServicesDataService";
    export default {
  name: "company",
  data() {
       return {
           company: [],
      };
  },created() {
       ServicesDataService.getAll()
        .then(response => {
          this.company = response.data;
          console.log(response.data);
          console.log(this.company);
          
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods :{
        cookie:function(id){
            this.equip_id=id;
             console.log(this.equip_id);
            console.log("router");
            
      document.cookie='companyid='+ id;
        } 
  }
  
};
</script>
