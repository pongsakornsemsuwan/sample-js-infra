var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
          return (
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
        console.log(this.state);
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
        console.log(this.state);
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="commentForm">
            <input
               type="text"
               placeholder="Your name"
               value={this.state.author}
               onChange={this.handleAuthorChange}
             />
             <input
               type="text"
               placeholder="Say something..."
               value={this.state.text}
               onChange={this.handleTextChange}
             />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
      },
    componentDidMount: function() {
        this.setState({data: data});
        // $.ajax({
        // url: this.props.url,
        // dataType: 'json',
        // cache: false,
        // success: function(data) {
        //     this.setState({data: data});
        // }.bind(this),
        // error: function(xhr, status, err) {
        //     console.error(this.props.url, status, err.toString());
        // }.bind(this)
        // });
    },
    render: function() {
        return (
            <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
            <CommentForm />
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
      var md = new Remarkable();
      var rawMarkup = md.render(this.props.children.toString());
      return { __html: rawMarkup };
    },

    render: function() {
        var md = new Remarkable();
        return (
            <div className="comment">
            <h2 className="commentAuthor">
            {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
