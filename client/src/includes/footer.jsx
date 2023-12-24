import React from "react";

const Footer = () =>{
    return(
        <>
        {/* Sidebar-right */}
        {/* <div className="sidebar sidebar-right sidebar-animate">
            <div className="panel panel-primary card mb-0 shadow-none border-0">
                <div className="tab-menu-heading border-0 d-flex p-3">
                    <div className="card-title mb-0"><i className="fe fe-bell me-2"></i><span
                            className=" pulse"></span>Notifications</div>
                    <div className="card-options ms-auto">
                        <a href="#" className="sidebar-icon text-end float-end me-3 mb-1"
                            data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i
                                className="fe fe-x text-white"></i></a>
                    </div>
                </div>
                <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                    <div className="tabs-menu border-bottom"> */}
                        {/* Tabs */}
                        {/* <ul className="nav panel-tabs">
                            <li className=""><a href="#side1" className="active" data-bs-toggle="tab"><i
                                        className="fe fe-settings me-1"></i>Feeds</a></li>
                            <li><a href="#side2" data-bs-toggle="tab"><i className="fe fe-message-circle"></i> Chat</a></li>
                            <li><a href="#side3" data-bs-toggle="tab"><i className="fe fe-anchor me-1"></i>Timeline</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active" id="side1">
                            <div className="p-3 fw-semibold ps-5">Feeds</div>
                            <div className="card-body pt-2">
                                <div className="browser-stats">
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span className="feeds avatar-circle brround bg-primary-transparent"><i
                                                    className="fe fe-user text-primary"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">New user registered</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                                    className="fe fe-shopping-cart text-secondary"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">New order delivered</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                                    className="fe fe-bell text-danger"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">You have pending tasks</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                                    className="fe fe-gitlab text-warning"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">New version arrived</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                                    className="fe fe-database text-pink"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">Server #1 overloaded</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-info brround bg-info-transparent"><i
                                                    className="fe fe-check-circle text-info"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">New project launched</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                    <a href="#"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 fw-semibold ps-5">Settings</div>
                            <div className="card-body pt-2">
                                <div className="browser-stats">
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span className="feeds avatar-circle brround bg-primary-transparent"><i
                                                    className="fe fe-settings text-primary"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">General Settings</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                                    className="fe fe-map-pin text-secondary"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">Map Settings</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                                    className="fe fe-headphones text-danger"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">Support Settings</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                                    className="fe fe-credit-card text-warning"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">Payment Settings</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-2 mb-sm-0 mb-3">
                                            <span
                                                className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                                    className="fe fe-bell text-pink"></i></span>
                                        </div>
                                        <div className="col-sm-10 ps-sm-0">
                                            <div className="d-flex align-items-end justify-content-between ms-2">
                                                <h6 className="">Notification Settings</h6>
                                                <div>
                                                    <a href="#"><i className="fe fe-settings me-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="side2">
                            <div className="list-group list-group-flush">
                                <div className="pt-3 fw-semibold ps-5">Today</div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/2.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Addie Minstra</div>
                                            <p className="mb-0 fs-12 text-muted"> Hey! there I' am available.... </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/11.jpg"><span
                                                className="avatar-status bg-success"></span></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Rose Bush</div>
                                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/10.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Claude Strophobia</div>
                                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/13.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Eileen Dover</div>
                                            <p className="mb-0 fs-12 text-muted"> New product Launching... </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/12.jpg"><span
                                                className="avatar-status bg-success"></span></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Willie Findit</div>
                                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/15.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Manny Jah</div>
                                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/4.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Cherry Blossom</div>
                                            <p className="mb-0 fs-12 text-muted"> Hey! there I' am available....</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-3 fw-semibold ps-5">Yesterday</div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/7.jpg"><span
                                                className="avatar-status bg-success"></span></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Simon Sais</div>
                                            <p className="mb-0 fs-12 text-muted">Schedule Realease...... </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/9.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Laura Biding</div>
                                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/2.jpg"><span
                                                className="avatar-status bg-success"></span></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Addie Minstra</div>
                                            <p className="mb-0 fs-12 text-muted">Contact me for details....</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/9.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Ivan Notheridiya</div>
                                            <p className="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/14.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Dulcie Veeta</div>
                                            <p className="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/11.jpg"></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Florinda Carasco</div>
                                            <p className="mb-0 fs-12 text-muted">New product Launching...</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md brround cover-image"
                                            data-bs-image-src="images/users/4.jpg"><span
                                                className="avatar-status bg-success"></span></span>
                                    </div>
                                    <div className="">
                                        <a href="chat.html">
                                            <div className="fw-semibold text-dark" data-bs-toggle="modal"
                                                data-target="#chatmodel">Cherry Blossom</div>
                                            <p className="mb-0 fs-12 text-muted">cherryblossom@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="side3">
                            <ul className="task-list timeline-task">
                                <li className="d-sm-flex mt-4">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">Task Finished<span
                                                className="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                                        <p className="text-muted fs-12">Adam Berry finished task on<a href="#"
                                                className="fw-semibold"> Project Management</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">New Comment<span
                                                className="text-muted fs-11 mx-2 fw-normal">05 July 2021</span></h6>
                                        <p className="text-muted fs-12">Victoria commented on Project <a href="#"
                                                className="fw-semibold"> AngularJS Template</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">New Comment<span
                                                className="text-muted fs-11 mx-2 fw-normal">25 June 2021</span></h6>
                                        <p className="text-muted fs-12">Victoria commented on Project <a href="#"
                                                className="fw-semibold"> AngularJS Template</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">Task Overdue<span
                                                className="text-muted fs-11 mx-2 fw-normal">14 June 2021</span></h6>
                                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="#"
                                                className="fw-semibold"> Integrated management</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">Task Overdue<span
                                                className="text-muted fs-11 mx-2 fw-normal">29 June 2021</span></h6>
                                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="#"
                                                className="fw-semibold"> Integrated management</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                                <li className="d-sm-flex">
                                    <div>
                                        <i className="task-icon1"></i>
                                        <h6 className="fw-semibold">Task Finished<span
                                                className="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                                        <p className="text-muted fs-12">Adam Berry finished task on<a href="#"
                                                className="fw-semibold"> Project Management</a></p>
                                    </div>
                                    <div className="ms-auto d-md-flex me-3">
                                        <a href="#" className="text-muted me-2"><span className="fe fe-edit"></span></a>
                                        <a href="#" className="text-muted"><span className="fe fe-trash-2"></span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/*/Sidebar-right*/}

        {/* Country-selector modal*/}
        <div className="modal fade" id="country-selector">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content country-select-modal">
                    <div className="modal-header">
                        <h6 className="modal-title">Choose Country</h6><button aria-label="Close" className="btn-close"
                            data-bs-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                        <ul className="row p-3">
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block active">
                                    <span className="country-selector"><img alt="" src={process.env.PUBLIC_URL+"/images/flags/us_flag.jpg"}
                                            className="me-3 language"/></span>USA
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/italy_flag.jpg"}
                                        className="me-3 language"/></span>Italy
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/spain_flag.jpg"}
                                        className="me-3 language"/></span>Spain
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/india_flag.jpg"}
                                        className="me-3 language"/></span>India
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/french_flag.jpg"}
                                        className="me-3 language"/></span>French
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/russia_flag.jpg"}
                                        className="me-3 language"/></span>Russia
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/germany_flag.jpg"}
                                        className="me-3 language"/></span>Germany
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt=""
                                        src={process.env.PUBLIC_URL+"/images/flags/argentina.jpg"}
                                        className="me-3 language"/></span>Argentina
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt="" src={process.env.PUBLIC_URL+"/images/flags/malaysia.jpg"}
                                        className="me-3 language"/></span>Malaysia
                                </a>
                            </li>
                            <li className="col-lg-6 mb-2">
                                <a href="#" className="btn btn-country btn-lg btn-block">
                                    <span className="country-selector"><img alt="" src={process.env.PUBLIC_URL+"/images/flags/turkey.jpg"}
                                        className="me-3 language"/></span>Turkey
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Country-selector modal*/}

        {/* FOOTER */}
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-12 col-sm-12 text-center">
                        Copyright © <span id="year"></span> <a href="#">Sash</a>. Designed by <a href="#">Shahrukh</a> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
        {/* FOOTER END */}
        </>
    );
}

export default Footer;

   