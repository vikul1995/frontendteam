<template>
<div id="equipment">
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0"><a href="#">Equipment</a></h2>
                            
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                     <li class="breadcrumb-item active"><a href="timeline">Timeline</a>
                                    <li class="breadcrumb-item active"><a href="#">Equipment</a>
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

     <div style="height:300px;width:100%">
  <vl-map data-projection="EPSG:4326" style="height: 300px">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile>
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-feature  v-for="geoData in coordinates" :key="geoData.coordinates" :id="geoData.coordinates">
      <vl-geom-point :coordinates="geoData.coordinates"></vl-geom-point>
        <vl-style-box>
          <vl-style-icon :src="icon" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
          <vl-style-text :text="geoData.companyName" font="14px  bold italic large" textAlign="left" style="color: red"></vl-style-text>
        </vl-style-box>
    </vl-feature>
 
  </vl-map>
  </div>
            <div class="content-detached content-right">
                <div class="content-body">
                    <!-- Ecommerce Content Section Starts -->
                    <section id="ecommerce-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="ecommerce-header-items">
                                    <div class="result-toggler">
                                        <button class="navbar-toggler shop-sidebar-toggler" type="button" data-toggle="collapse">
                                            <span class="navbar-toggler-icon d-block d-lg-none"><i class="feather icon-menu"></i></span>
                                        </button>
                                        <div class="search-results">
                                            {{count}} Results Found
                                        </div>
                                    </div>
                                    <div class="view-options">
                                        
                                        <div class="view-btn-option" style="margin-top:5px">
                                            
                                            <button class="btn btn-white view-btn grid-view-btn active">
                                                <i class="feather icon-grid"></i>
                                            </button>
                                            <button class="btn btn-white list-view-btn view-btn">
                                                <i class="feather icon-list"></i>
                                            </button>
                                            <div class="w3-dropdown-hover w3-right">
                                            <button class="w3-button " style="width:170px;background-color:white;color:#0C1A3F;box-shadow: 5px 5px 5px #AFACA6 ;transition: top ease 0.5s;"><b>Short By</b> <i style="margin-left:15px" class="fa fa-bars">  </i> </button>
                                            <div class="w3-dropdown-content w3-bar-block w3-border" style="right:0">
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="acending">Ads Acending</a>
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="decending">Ads Decending</a>
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="companyasc">Company Acending</a>
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="companydesc">Company Decending</a>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Ecommerce Content Section Starts -->
                    <!-- background Overlay when sidebar is shown  starts-->
                    <div class="shop-content-overlay"></div>
                    <!-- background Overlay when sidebar is shown  ends-->

                    <!-- Ecommerce Search Bar Starts -->
                    <section id="ecommerce-searchbar">
                        <div class="row mt-1">
                            <div class="col-sm-12">
                                <fieldset class="form-group position-relative">
                                    <input type="text" class="form-control search-product" id="iconLeft5" placeholder="Search here">
                                    <div class="form-control-position">
                                        <i class="feather icon-search"></i>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </section>
                    <!-- Ecommerce Content Section Starts -->
                    <!-- background Overlay when sidebar is shown  starts-->
                    <div class="shop-content-overlay"></div>
                    <!-- background Overlay when sidebar is shown  ends-->

                    <!-- Ecommerce Search Bar Starts -->
                     

                    <!-- Ecommerce Search Bar Ends -->

                    <!-- Ecommerce Products Starts -->
                  <section id="ecommerce-products" class="grid-view">
                        <div class="card ecommerce-card" v-for="equipment in equipments" :key="equipment.id">
                            <router-link :to="{ name: 'details',params:{id:equipment.id,category_name:'Equipments'}}"><div class="card-content">
                                <div class="item-img text-center">
                                    
                                        <img class="img-fluid"  :src="equipment.Images[0].image" alt="img-placeholder">
                                </div>
                                <div class="card-body">
                                    <div class="item-wrapper">
                                        <div class="item-rating">
                                            <div class="badge badge-primary badge-md">
                                                <span>4</span> <i class="feather icon-star"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="item-price">
                                                
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="item-name">
                                        <a href="app-ecommerce-details.html">{{equipment.name}}</a>
                                        <p class="item-company">By <span class="company-name">{{equipment.company}}</span></p>
                                    </div>
                                    <div>
                                        <p class="item-description"
                                           v-html="equipment.description">
                                        </p>
                                    </div>
                                </div>
                                <div class="item-options text-center">
                                    <div class="item-wrapper">
                                        <div class="item-rating">
                                            <div class="badge badge-primary badge-md">
                                                <span>4</span> <i class="feather icon-star"></i>
                                            </div>
                                        </div>
                                        <div class="item-cost">
                                            <h6 class="item-price">
                                                
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="cart">
                                        
                                   <div  v-for="subcategory in subcategories"  :key="subcategory.id">
                                      <div  v-if="subcategory.id==equipment.subcategory_id">
                                       <a style="float:left;margin-top:10px ; margin-left:10px ;font-size:12px;color:white" href=""> Equipments / {{subcategory.subcategory_name}}</a>
                                    </div>
                                       
                                    </div>
                                    </div>
                                </div>
                            </div>
                             </router-link>
                        </div>
                        
                    </section>
                    <!-- Ecommerce Products Ends -->

                    <!-- Ecommerce Pagination Starts -->
                    <section id="ecommerce-pagination">
                        <div class="row">
                            <div class="col-sm-12">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center mt-2">
                                        <li class="page-item prev-item"><a class="page-link" href="#"></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item" aria-current="page"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                                        <li class="page-item next-item"><a class="page-link" href="#"></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <!-- Ecommerce Products Ends -->

                    <!-- Ecommerce Pagination Ends -->

                </div>
            </div>
            <div class="sidebar-detached sidebar-left">
                <div class="sidebar">
                    <!-- Ecommerce Sidebar Starts -->
                    <div class="sidebar-shop" id="ecommerce-sidebar-toggler">

                        <div class="row">
                            <div class="col-sm-12">
                                <h6 class="filter-heading d-none d-lg-block">Filters</h6>
                            </div>
                        </div>
                        <span class="sidebar-close-icon d-block d-md-none">
                            <i class="feather icon-x"></i>
                        </span>
                        <div class="card">
                            <div class="card-body">
                               
                                <!-- /Price Range -->
                          
                                <!-- Categories Starts -->
                                <div id="product-categories">
                                    <div class="product-category-title">
                                        <h6 class="filter-title mb-1">Categories</h6>
                                        <input style="width:80%;height:25px;margin-right:5px" v-on:input="subcategorysearch" autocomplete="off" v-model="search" type="text" placeholder="Search.." name="search">
                                        
                                        <div class="w3-dropdown-hover " style="float:right">
                                            <button class="w3-button " style="width:3px;height:25px;background-color:white;color:white"><i  class="fa fa-bars" style="color:black;width:10px;height:0px">  </i> </button>
                                            <div class="w3-dropdown-content w3-bar-block w3-border" style="right:0">
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="subcategoryasc">Ads Acending</a>
                                            <a href="#" class="w3-bar-item w3-button" v-on:click="subcategorydesc">Ads Decending</a>
                                           
                                            </div>
                                            </div>
                                    </div>
                                    <hr>
                                      {{msg}}
                                    <ul class="list-unstyled categories-list noStyleList"  >
                                    
                                       <li v-for="subcategory in subcategories"  :key="subcategory.id" > 
                                            <div >
                                             <span  style="font-size:15px;cursor: pointer;">{{subcategory.subcategory_name}}</span>    
                                            
                                             <input  style="float:right;transform : scale(1.5); " class="ml-50" type="checkbox" @change="fetchServicesData(checked)" name="category-filter" id="checkbox" :value="subcategory.id" v-model="checked" >
                                           
                                             </div>
                                             <hr>
                                        </li>

                                      
                                    </ul>
                                </div>
                                <!-- Categories Ends -->
                                <hr>
                                <!-- Brands -->
                                
                                <!-- Clear Filters Starts -->
                                <div id="clear-filters">
                                    <button class="btn btn-block btn-primary">CLEAR ALL FILTERS</button>
                                </div>
                                <!-- Clear Filters Ends -->

                            </div>
                        </div>
                    </div>
                    <!-- Ecommerce Sidebar Ends -->

                </div>
            </div>
        </div>
    </div>
    <!-- END: Content-->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</div>
</template>
<script>

import ServicesDataService from "../services/ServicesDataService";
import EquipmentDataService from "../services/EquipmentDataService";
    export default {
  name: "Equipment",
  data() {
       return {
             checked:[],
           dataToDisplay: new Map(),
           search:'',
           equipmentsearch:[],
           equipments: [],
           subcategories:[],
           count:0,
           msg:'',
            zoom: 15,
        center: [73.909382, 18.609025],
        rotation: 0,
        icon: require('../assetsold/marker.png'),
        coordinates:[],
           equip_id:0,
      };
  },
  
  
 
  async created() {



      //  await EnpneedsDb.addNewValue("new key12","Rambha22");
      //  let value = await EnpneedsDb.readValue("new key122");
      //  console.log("valueva ="+value);
      //  console.log("pringed");
       

        ServicesDataService.getsubcategory(2)
        .then(response => {
          this.subcategories =  response.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
       
         EquipmentDataService.getAll()
        .then(response => {
          this.equipments = response.data.data.data;
          this.count=(this.equipments).length;
          console.log(this.equipments);

  class GeoData{
                constructor(companyName, coordinates) {
                    this.companyName = companyName;
                    this.coordinates = coordinates;
                }
             }
            for(let i =0;i<(this.equipments).length;i++)
             {
                  
             let coordinates = [parseFloat(this.equipments[i].longitude),parseFloat(this.equipments[i].latitude)];
               let companyName = this.equipments[i].company;
               let geoData = new GeoData (companyName,coordinates);
                 this.coordinates.push(geoData); 
                 
            
             }
        })
        .catch(e => {
          console.log(e);
        });
       
  },
   methods: {
     fetchequipmentsData: async function(ids){

        document.getElementById("equipment").style.opacity = 0.5;

if(ids.length==0){
    let responseData = await EquipmentDataService.getAll()
          this.equipments = responseData.data.data.data;
        document.getElementById("equipment").style.opacity = 1;
         
    return;
}
            this.coordinates = [];
             class GeoData{
                constructor(companyName, coordinates) {
                    this.companyName = companyName;
                    this.coordinates = coordinates;
                }
             }

        this.equipments= [];
        for (let [key, value] of this.dataToDisplay) {
            if(!ids.includes(key)){
                this.dataToDisplay.delete(key);
                console.log("Deleted key ="+key)+", Deleted value ="+value;
            }
        }

       

        for(let i=0;i<ids.length;i++){
            if(!this.dataToDisplay.has(ids[i])){
            let response = await EquipmentDataService.getequipmentsubcategoryid(ids[i]);
           {
                this.dataToDisplay.set(ids[i], response.data.data);
                }
            
            }
         }

        for (let [ key ,value] of this.dataToDisplay) {
          console.log("key = "+key+",Value = "+value);
         if (typeof value !== 'undefined')
          for(let item of value){
                this.equipments.push(item);
              
          }
         
        }
         for(let i =0;i<(this.equipments).length;i++)
             {
                  
             let coordinates = [parseFloat(this.equipments[i].longitude),parseFloat(this.equipments[i].latitude)];
               let companyName = this.equipments[i].company;
               let geoData = new GeoData (companyName,coordinates);
                 this.coordinates.push(geoData); 
                 
            
             }
             this.count=(this.equipments).length;
        
        console.log(this.equipments);
        console.log("this is checkbox");
      
        document.getElementById("equipment").style.opacity = 1;
        
        
    },
  
    searchdata: async function(event){
         this.coordinates = [];
             class GeoData{
                constructor(companyName, coordinates) {
                    this.companyName = companyName;
                    this.coordinates = coordinates;
                }
             }
        document.getElementById("equipment").style.opacity = 0.5;
           event.preventDefault();
            this.equipments=[];
            this.coordinates=[];
                var formData = new FormData();
                formData.append("search" ,this.search);
                
               let response = await EquipmentDataService.equipmentsearch(formData);
               for(let item of response.data.data){
                    this.equipments.push(item);
                }
                 for(let i =0;i<(this.equipments).length;i++)
             {
                  
             let coordinates = [parseFloat(this.equipments[i].longitude),parseFloat(this.equipments[i].latitude)];
               let companyName = this.equipments[i].company;
               let geoData = new GeoData (companyName,coordinates);
                 this.coordinates.push(geoData); 
                 
            
             }
               
             this.msg='';
        document.getElementById("equipment").style.opacity = 1;

             },

      
        acending:function(){
            this.equipments=[];
           EquipmentDataService.getasc()
        .then(response => {
          this.equipments = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        },     
        decending:function(){
            this.equipments=[];
           EquipmentDataService.getdesc()
        .then(response => {
          this.equipments = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        } ,    
        companydesc:function(){
            this.equipments=[];
           EquipmentDataService.getcompanydesc()
        .then(response => {
          this.equipments = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        } ,    
        companyasc:function(){
            this.equipments=[];
           EquipmentDataService.getcompanyasc()
        .then(response => {
          this.equipments = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        } ,    
        subcategoryasc:function(){
             this.search='';
            this.subcategories=[];
           EquipmentDataService.getsubcategoryasc(2)
        .then(response => {
          this.subcategories = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        } ,    
        subcategorydesc:function(){
             this.search='';
            this.subcategories=[];
           EquipmentDataService.getsubcategorydesc(2)
        .then(response => {
          this.subcategories = response.data.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
        } ,   
        subcategorysearch:function(event){
            
           event.preventDefault();
           
                var formData = new FormData();
                formData.append("search" ,this.search);
                console.log(formData);
                EquipmentDataService.subcategorysearch(formData,2)
                    .then(response=>{
                        if(((response.data).success)==false){
    
                        this.subcategories=[];
                        this.msg="category not available";
            
                        }
                        else{
                 
                  this.subcategories=[];
            
             this.subcategories=response.data.data;
             this.msg='';
             }
        })
                    .catch(e=>{
                        console.log(e);
                       
                    });
        } 
  }

  
};
</script>
<style>
.noStyleList{
    list-style-type: none;
}
 ul li ul.dropdown{
        min-width: 100%; /* Set width of the dropdown */
        background: #f2f2f2;
        display: none;
        position: absolute;
        z-index: 999;
        left: 0;
    }
    ul li:hover ul.dropdown{
        display: block; /* Display the dropdown */
    }
    ul li ul.dropdown li{
        display: block;
    }

</style>