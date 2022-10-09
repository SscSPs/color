const VisitGithub = () => {
    return(
        <div className="visitGithub">
            <a className="visitGithubBtn" href="https://github.com/SscSPs/color" rel="noreferrer" target="_blank">
                <img src={process.env.PUBLIC_URL + '/GitHub-Mark-Light-32px.png'} alt="img"/>
            </a>
        </div>
    )
}
export default VisitGithub;