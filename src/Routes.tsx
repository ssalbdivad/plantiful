import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Blog, Home, Story } from "./pages"
import { Post } from "./pages/Post"

export const Routes = () => (
    <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="story" element={<Story />} />
        <Route path="*" element={<Home />} />
    </ReactRoutes>
)
