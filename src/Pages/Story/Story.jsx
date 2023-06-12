import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'


const Story = () => {
const story = [
    {
    image: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1600"
}, {
    image: "https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?auto=compress&cs=tinysrgb&w=1600"
},
{
    image: "https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    image: "https://images.pexels.com/photos/2739277/pexels-photo-2739277.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    image: "https://images.pexels.com/photos/4947042/pexels-photo-4947042.jpeg?auto=compress&cs=tinysrgb&w=600"
},


]

  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story