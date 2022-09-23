import {
  CREATE_NEW_POST,
  GET_FEED_POSTS,
  GET_WALL_DATA,
  UPDATE_POST,
  WallActions,
} from '@sift/actions/Wall.actions';
import { PostObjType, WallDataType } from '@sift/models/apps/Wall';

const initialState: {
  wallData: WallDataType | null;
  postList: PostObjType[];
} = {
  wallData: null,
  postList: [],
};

const WallApp = (state = initialState, action: WallActions) => {
  switch (action.type) {
    case GET_WALL_DATA:
      return {
        ...state,
        wallData: action.payload,
      };
    case GET_FEED_POSTS: {
      return { ...state, postList: action.payload };
    }

    case CREATE_NEW_POST: {
      return {
        ...state,
        postList: [action.payload, ...state.postList],
      };
    }

    case UPDATE_POST: {
      return {
        ...state,
        postList: state.postList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
export default WallApp;
