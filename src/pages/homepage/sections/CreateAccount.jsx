import { images } from "../../../assets/images/images"
import Button from "../../../components/button/Button"


const CreateAccount = () => {

    return (
        <div className={`create-account bg-black`}>
            <div className="container mx-auto py-[40px] px-4">
                <div className="create-account-elements flex items-center justify-between w-full">
                    <div className="left-image basis-6/12 flex-shrink-0 hidden md:block">
                        <img className="h-[100%]" src={images.booksBgCropped} alt="" />
                    </div>
                    <div className="right-content text-white w-full md:basis-6/12 flex-shrink-0">
                        <div className="right-content-wraper">
                            
                            <div className="w-full flex justify-end mb-[50px]">
                                <span className="relative inline-block w-[200px] h-[3px] bg-red-400 text-right"></span>
                                <span className="absolute inline-block w-[4px] h-[200px] bg-red-400"></span>
                            </div>
                        
                            <div className="create-acccount-action-content pr-[35px]">
                                <h2 className="font-bolld italic text-3xl">eBook Shelf</h2>
                                <p className="font-bold italic">Free for all</p>
                                <p className="mt-4">Large Onlilne Library where everything is free. we update our book database every dday. Herer you will findd books of any genere for adults and the youngest who have jusst learned to read</p>

                                <Button title="Create Account" navigateTo="/signup" className="mt-[20px]" />
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateAccount
