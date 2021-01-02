
import Item from './items'
const Essentials = () => {

    const essen = [
        [1, 1],
        [1, 2],
        [2, 1],
        [2, 2],
        [3, 1],
        [3, 2],
        [4, 1],
        [4, 2]
    ]


    return (
        <div className="mx-auto">
            <ul className="mx-auto md:ml-0 flex flex-col my-4 space-y-4 text-white max-w-lg">
                {
                    essen.map((item, index) => <Item key={index} item={item} />)
                }
            </ul>
        </div>
    )
}

export default Essentials