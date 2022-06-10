import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Errado! O tipo do JSX não pode ser uma expressão.
  return <components[props.storyType] story={props.story} />;
}

import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correto! O tipo JSX pode ser uma variável começando com letra maiúscula.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}