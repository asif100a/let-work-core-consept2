export default function Friend({friend}) {
    const {title, url} = friend;
    return (
        <div className="box">
            <h4>Title: {title}</h4>
            <img src={url} alt="JSON Placeholder Images" style={{borderRadius: '2Jem'}}/>
        </div>
    )
};