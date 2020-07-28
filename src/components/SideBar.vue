<template>
    <div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header" style="height:100px">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="/timeline">
                        <img style="height:70px" src="./../app-assets/images/logo.png">
                        <h1 class="brand-text mb-0">ENPNEEDS</h1>
                    </a></li>
                <li class="nav-item nav-toggle">
                    <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
                        <i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
                        <i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                
                
                
                <li class=" nav-item"><a href="/equipments"><i class="feather icon-message-square"></i><span class="menu-title" data-i18n="Chat">Equipments</span></a>
                </li>
                
                <li class=" nav-item"><a href="/services"><i class="feather icon-shopping-cart"></i><span class="menu-title" data-i18n="Ecommerce">Services</span></a>
                </li>
                
                
                
                <li class="nav-item"><a href="/Unit_rigs"><i class="feather icon-user"></i><span class="menu-title" data-i18n="Profile">Unit Rigs</span></a>
                </li>
                <li class=" nav-item"><a href="/Supplier"><i class="feather icon-settings"></i><span class="menu-title" data-i18n="Account Settings">Supplier</span></a>
                </li>
                <li class=" nav-item"><a href="/Posts"><i class="feather icon-help-circle"></i><span class="menu-title" data-i18n="FAQ">Post Ads</span></a>
                </li>
                <li class=" nav-item"><a href="/company"><i class="feather icon-help-circle"></i><span class="menu-title" data-i18n="FAQ">Companies</span></a>
                </li>
                <li class=" nav-item"><a href="/postad"><i class="feather icon-help-circle"></i><span class="menu-title" data-i18n="FAQ">Blogs</span></a>
                </li>
                
                <li class=" navigation-header"><span>Maps</span>
                </li>
                
                <li class=" nav-item"><a href="maps-google.html"><i class="feather icon-map"></i><span class="menu-title" data-i18n="Google Maps">Google Maps</span></a>
                </li>
                
                <li class=" navigation-header"><span>Support</span>
                </li>
                <li class=" nav-item"><a href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation"><i class="feather icon-folder"></i><span class="menu-title" data-i18n="Documentation">Documentation</span></a>
                </li>
                <li class=" nav-item"><a href="https://pixinvent.ticksy.com/"><i class="feather icon-life-buoy"></i><span class="menu-title" data-i18n="Raise Support">Raise Support</span></a>
                </li>
            </ul>
        </div>
    </div>
    
</template>