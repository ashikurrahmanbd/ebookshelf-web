import CommentsSlider from "../../../components/comments-slider/CommentsSlider";

const Comments = () => {

    return (
        <div className="Comments relative py-[50px] bg-black">
            <div className="container mx-auto px-4 sm:px-2">
                <div className="comments-elements text-white">
                    <h2 className="text-3xl text-white">Comments</h2>

                </div>
            </div>
            <div className="comments-slider text-white mt-[40px]">
                
                    <CommentsSlider />
                
            </div>
        </div>
    )

}

export default Comments;
