
import logo from './images/logo-white.svg'

function App() {
    return (
        <div className={`relative`}>
            {/*  NAv BAr*/}
            <nav
                className={`px-9 flex items-center justify-between mx-auto text-5xl text-red-900 p-6 bg-reduxBlack`}>
                <img src={logo} alt='REDUX' width="150px" height="62px"></img>
                <button
                    className={`transition duration-250 group bg-reduxBlack text-white rounded-xl border border-1 border-white hover:text-white hover:border-purple-500 `}
                    data-bs-toggle="modal" data-bs-target={`#exampleModalCenter`}>
                    <div
                        className={`transition duration-250 flex flex-row justify-between text-3xl mx-9 my-3 space-x-6 group-hover:text-purple-500`}>
                        <div>
                            MyCart
                        </div>
                        <div
                            className={`transition duration-250 bg-white rounded-3xl text-white text-xl px-5 py-1 text-reduxBlack group-hover:bg-purple-500`}>1
                        </div>
                    </div>
                </button>
            </nav>
            {/*    MOdal*/}
            <div id="menu" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}></div>
                </div>
            </div>

            <div className={`flex flex-col space-y-20 min-h-screen bg-[#3f3f3f]`}>
                <div className={`ml-9 text-white text-5xl mt-6`}>
                    Products
                </div>

                <div className={`mx-9 flex flex-col space-y-3`}>
                    <div className={`flex flex-col bg-white rounded-xl p-9 pl-15 pr-20 space-y-9`}>
                        <div className={`text-bold text-5xl`}>
                            Kenya AA
                        </div>
                        <div className={``}>
                            IMAGE
                        </div>
                        <div>
                            DESCRIPTION
                        </div>
                        <div className={`flex flex-row justify-between space-x-5`}>
                            <div className={`text-3xl jus`}>
                                Price $100.00
                            </div>
                            <button
                                className={`border border-1 border-reduxBlack p-6 rounded-xl hover:text-white hover:bg-reduxBlack`}>Add
                                To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
