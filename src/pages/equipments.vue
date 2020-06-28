<template>
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
                                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">eCommerce</a>
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
                                    <div class="view-options">
                                        <select class="price-options form-control" id="ecommerce-price-options">
                                            <option selected>Featured</option>
                                            <option value="1">Lowest</option>
                                            <option value="2">Highest</option>
                                        </select>
                                        <div class="view-btn-option">
                                            <button class="btn btn-white view-btn grid-view-btn active">
                                                <i class="feather icon-grid"></i>
                                            </button>
                                            <button class="btn btn-white list-view-btn view-btn">
                                                <i class="feather icon-list"></i>
                                            </button>
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
                                    <input type="text" class="form-control search-product" id="iconLeft5" placeholder="Search here" style="width:100%">
                                    <div class="form-control-position">
                                        <i class="feather icon-search"></i>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </section>
                    <!-- Ecommerce Search Bar Ends -->

                    <!-- Ecommerce Products Starts -->
                    <section id="ecommerce-products" class="grid-view">
                    {{msg}}
                    <div v-for="equipment in equipments.data" :key="equipment">
                        <router-link :to="{ name: 'details', params: { id: equipment.id,categoryid:2,subcategoryid:subid  } }"> <div class="card ecommerce-card">
                            <div class="card-content" style="width:130px;height:300px;">
                                <div class="item-img text-center">

                                     <figure><span  style=" margin-top: 25px; margin-right: 20px;  margin-left: 20px;" ><img :src="equipment.Images[0].image"  style="width: 150px;height:120px;" /></span></figure>
                                </div>
                                <div class="card-body">
                                    <div class="item-wrapper">
                                        <div class="item-rating">
                                            <div class="badge badge-primary badge-md">
                                            
                                            </div>
                                        </div>
                                        <div>
                                        
                                        </div>
                                    </div>
                                    <div class="item-name">
                                        <a href="app-ecommerce-details.html">{{equipment.name}}</a>
                                        <p class="item-company">By <span class="company-name">Google</span></p>
                                    </div>
                                    <div>
                                        <p class="item-description">
                                           {{equipment.discription}}
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
                                                $39.99
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="wishlist">
                                        <i class="fa fa-heart-o"></i> <span>Wishlist</span>
                                    </div>
                                    <div class="cart">
                                        <i class="feather icon-shopping-cart"></i> <span class="add-to-cart">Add to cart</span> <a href="app-ecommerce-checkout.html" class="view-in-cart d-none">View In Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div></router-link>
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
                                    
                                      <li v-for="subcategory in subcategorys" :key="subcategory"> 
                                            <span class="vs-radio-con vs-radio-primary py-25" v-on:click="equipment(subcategory.id)">
                                                <input type="radio"  name="category-filter" value="false" >
                                                <span class="vs-radio">
                                                    <span class="vs-radio--border"></span>
                                                    <span class="vs-radio--circle"></span>
                                                </span>
                                                <span class="ml-50">{{subcategory.subcategory_name}}</span>
                                            </span>
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
    
</template>

<script>
import ServicesDataService from "../services/ServicesDataService";
import EquipmentDataService from "../services/EquipmentDataService";
    export default {
  name: "Equipment",
  data() {
       return {
           equipments: [],
           subcategorys:[],
           count:0,
           msg:'',
           
           
      };
  },created() {
        ServicesDataService.getsubcategory(2)
        .then(response => {
          this.subcategorys = response.data;
          console.log(response.data);
          
        })
        .catch(e => {
          console.log(e);
        });
  },
   methods: {
    equipment: function (id) {
        this.subid=id;
       EquipmentDataService.getequipmentsubcategoryid(id)
        .then(response => {
          if(((response.data).success)==false){
               
               this.equipments=[];
               this.msg="equipment not available";
               this.count=0;
             }
             else{

              this.count = ((response.data).data).length;
             console.log(response.data);
             this.equipments=response.data;
             this.msg='';
             }
        })
        .catch(e => {
          console.log(e);
        }); 
      
    }
  }

  
};
</script>