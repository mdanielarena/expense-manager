<!-- Side Navbar -->
<nav class="side-navbar">
    <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div class="sidenav-header d-flex align-items-center justify-content-center">
            <!-- User Info-->
            <div class="sidenav-header-inner text-center"><a href="pages-profile.html"><img src="img/avatar-7.jpg" alt="person" class="img-fluid rounded-circle"></a>
            <h2 class="h5">{{$data['email']}}</h2><span>{{$data['role']}}</span> 
            </div>
            <!-- Small Brand information, appears on minimized sidebar-->
            <div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center"> <strong>B</strong><strong class="text-primary">D</strong></a></div>
        </div>
        <!-- Sidebar Navigation Menus-->
        <div class="main-menu">
            
            <ul id="side-main-menu" class="side-menu list-unstyled">                  
            <li><a href="/"> <i class="icon-home"></i>Home</a></li>
            
            @if($data['role_id'] === 1) 
                <li><a href="#formsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-form"></i>User Management</a>
                    <ul id="formsDropdown" class="collapse list-unstyled ">
                    <li><a href="/roles">Roles</a></li>
                    <li><a href="/users">Users</a></li>
                    </ul>
                </li>
            @endif
            <li><a href="#chartsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-bar-chart"></i>Expense Management </a>
                <ul id="chartsDropdown" class="collapse list-unstyled ">
                @if($data['role_id'] === 1) 
                    <li><a href="/expense-categories">Expense categories</a></li>
                @endif
                <li><a href="/expense">Expenses</a></li>
                </ul>
            </li>
            @if($data['role_id'] === 2) 
                <li><a href="#settingsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-gear"></i>Settings </a>
                    <ul id="settingsDropdown" class="collapse list-unstyled ">
                    <li><a href="/user-change-password">Change Password</a></li>
                    </ul>
                </li>
            @endif
            
            </ul>
        </div>
    </div>
</nav>