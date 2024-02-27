export const CommitSquare = ({commits, color } : {commits: number, color: string}) => {
    return (
        <div onClick={() => alert("Commits: "+commits)} style={{height: "0.75em", width: "0.75em", backgroundColor: color, borderRadius: "1px", margin: "2px" }}/>
    )
}