import { Component } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import Grid from "@material-ui/core/Grid";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  onSubmitForm = async (value) => {
    const response = await youtube.get("/search", {
      params: {
        q: value
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitForm={this.onSubmitForm} />
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <VideoDetail video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </Grid>
        </Grid>

        {/* <VideoDetail video={this.state.selectedVideo} />
          
         
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              /> */}
      </div>
    );
  }
}
export default App;
