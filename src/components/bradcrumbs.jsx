
const BreadCrumbs = (props) => {

    return (
        <div className="sticky top-20">
            <h2 className="text-2xl ml-4 font-extrabold hidden md:block">{props.children}</h2>
        </div>
    )
}

export default BreadCrumbs