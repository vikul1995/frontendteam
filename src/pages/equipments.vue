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
                            <h2 class="content-header-title float-left mb-0">shop</h2>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/timeline">Home</a>
                                    </li>
                                    <li class="breadcrumb-item active">Equipment
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
                                           {{count}} results found
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
                                <div class="search-container">
                                            <form >
                                            <input style="width:90%;height:35px" v-model="search" type="text" placeholder="Search.." name="search">
                                            <button type="submit"  v-on:click="searchdata($event)" style="width:50px;height:35px; background: #ddd; color:black" ><i class="fa fa-search" style="margin-right:30px;" ></i></button>
                                            </form>
                                        </div>
                    
                            </div>
                        </div>
                    </section>
                    <!-- Ecommerce Search Bar Ends -->

                    <!-- Ecommerce Products Starts -->
                    <section id="ecommerce-products" class="grid-view">
                    {{msg}}
                    <div class="row">
                   <div v-for="equipment in equipments" :key="equipment" style="width:220px;height:280px;">
                        <router-link :to="{ name: 'details', params: { id: equipment.id,categoryid:2 } }"> <div class="card ecommerce-card" style="margin-top:10px;width:200px;height:280px;">
                            <div class="card-content" style="width:160px;height:120px;">
                                <div class="item-img text-center">

                                     <figure><span  style=" margin-top: 25px; margin-right: 20px;  margin-left: 20px;" ><img :src="equipment.Images[0].image"  style="margin-top:10px;width: 160px;height:120px;" /></span></figure>
                                </div>
                                </div>
                                <div class="card-body" style="margin-left:10px;width:180px;height:100px;">
                                   
                                    <div class="item-name">
                                        <a href="app-ecommerce-details.html">{{equipment.name}}</a>
                                
                                    </div>
                                    <div>
                                        <p class="item-description">
                                           {{equipment.discription.slice(0, 70)}}......
                                        </p>
                                    </div>
                                </div>
                        </div></router-link>
                        </div>
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
                               
                                <!-- Categories Starts -->
                                <div id="product-categories">
                                    <div class="product-category-title">
                                        <h6 class="filter-title mb-1">Categories</h6>
                                    </div>
                                    <ul class="list-unstyled categories-list" >
                                    
                                      <li v-for="subcategory in subcategories" :key="subcategory" > 
                                            <div >
                                             <span  style="font-size:15px;cursor: pointer;">{{subcategory.subcategory_name}}</span>    
                                            
                                             <input  style="float:right;transform : scale(1.5); " class="ml-50" type="checkbox" @change="fetchequipmentsData(checked)" name="category-filter" id="checkbox" :value="subcategory.id" v-model="checked" >
                                           
                                             </div>
                                             <hr>
                                        </li>

                                      
                                    </ul>
                                </div>
                               
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
        icon: require('./../app-assets/images/marker.png'),
        coordinates:[],
           
      };
  },
  
  
 
  created() {

        ServicesDataService.getsubcategory(2)
        .then(response => {
          this.subcategories = response.data;
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
                  
             let coordinates = [parseFloat(this.equipments[i].longitute),parseFloat(this.equipments[i].latitute)];
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
                  
             let coordinates = [parseFloat(this.equipments[i].longitute),parseFloat(this.equipments[i].latitute)];
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
                  
             let coordinates = [parseFloat(this.equipments[i].longitute),parseFloat(this.equipments[i].latitute)];
               let companyName = this.equipments[i].company;
               let geoData = new GeoData (companyName,coordinates);
                 this.coordinates.push(geoData); 
                 
            
             }
               
             this.msg='';
        document.getElementById("equipment").style.opacity = 1;

             },
  }

  
};
</script>
