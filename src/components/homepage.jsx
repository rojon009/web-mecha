import EventPreview from "./eventPreview"
import ImageSlider from "./imageSlider"
import NoticePreview from "./noticePreview"

const HomePage = (props) => {
    return (
        <div className="mx-auto px-1 grid grid-cols-2 row-auto gap-2 max-w-screen-xl">
            <ImageSlider />
            <NoticePreview />
            <EventPreview />
        </div >
    )
}

export default HomePage