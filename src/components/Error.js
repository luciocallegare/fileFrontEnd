
export default function Error({ err }) {
    if (err.status === 404) {
        return (
            <div className="errorMsg">
                <img src="./error.png"/>
                <h2>Oops! Sorry File not found!</h2>
            </div>
        )
    } 
    if (err.status === 500) {
        return (
            <div className="errorMsg">
            <img src="./error.png"/>
            <h2>Oops! There seems to be something wrong with this file...</h2>
        </div>
        )
    }
}