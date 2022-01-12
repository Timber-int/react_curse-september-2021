const Pagination = ({totalPage, postsPerPage, startPagination}) => {
    const numberPostsArray = []
    for (let i = 1; i < Math.ceil(totalPage / postsPerPage); i++) {
        numberPostsArray.push(i);
    }
    return (
        <div className="button-container">
            {
                numberPostsArray.map(number => (
                    <button key={number} onClick={() => startPagination(number)}>{number}</button>
                ))
            }

        </div>
    );
}
export default Pagination;