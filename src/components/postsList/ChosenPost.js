import "../style/Style.css";


const ChosenPost = ({chosenPost}) => {
    return (
        <div>
            {
                chosenPost &&
                <div className="chosen_post-box">
                    <div>
                        Body: {chosenPost.body}
                    </div>

                    <div>
                        User id: {chosenPost.userId}
                    </div>
                </div>
            }
        </div>
    );
}

export default ChosenPost;