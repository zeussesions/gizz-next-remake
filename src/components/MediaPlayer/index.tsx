import { MediaPlayerWrapper } from "./styles";

interface Props {
  bandcampCode: number;
}  

const MediaPlayer = ({ bandcampCode }: Props) => {
//   const bandcampCode = 2916045823;

  return (
    <MediaPlayerWrapper
      src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcampCode}/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/`}
      seamless
    />
  );
};

export default MediaPlayer;
