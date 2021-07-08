import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt=""
              src={video.snippet.thumbnails.medium.url}
              style={{ width: "140px", height: "100px", borderRadius: "10%" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={video.snippet.title}
            // secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
      </List>
    </div>
  );
};
export default VideoItem;
