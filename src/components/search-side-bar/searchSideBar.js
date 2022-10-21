import { RiSearch2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import "./searchSideBar.css";
import { Filter } from "../filter/filter";
export function SearchSideBar() {
    return (
        <>
            <div className="sidebar-container">
                {/* Search input */}
                <div className="search-input">
                    <input type="text" placeholder="Search here" />
                    <a>
                        <RiSearch2Line />
                    </a>
                </div>
                {/* filter */}
                <div className="filter-container">
                    <div className="filter-headings">
                        <h4>Found 33 Colleges</h4>
                        <a>Set Default</a>
                    </div>
                    <div className="active-filter-container">
                        <h3>Selected Filters</h3>
                        <div className="active-filters">
                            <div className="active-filter">
                                <p>engineering</p>
                                <a>
                                    <ImCross />
                                </a>
                            </div>
                            <div className="active-filter">
                                <p>software</p>
                                <a>
                                    <ImCross />
                                </a>
                            </div>
                            <div className="active-filter">
                                <p>mobile phone</p>
                                <a>
                                    <ImCross />
                                </a>
                            </div>
                            <div className="active-filter">
                                <p>react js</p>
                                <a>
                                    <ImCross />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* filter catagories */}
                <div className="filters-container">
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                </div>
            </div>
        </>
    );
}
