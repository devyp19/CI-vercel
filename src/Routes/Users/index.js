import { ProtectedRoute } from "components";
import React from "react";
import { Route, Routes } from "react-router-dom";
// Users Routes
import NotFound from "pages/NotFound";
import AllApplication from "pages/Users/AllApplication";
import Bookings from "pages/Users/Bookings";
import BookSpaceDaily from "pages/Users/BookSpaceDaily";
import BookSpaceMonthly from "pages/Users/BookSpaceMonthly";
import BookSpaceWeekly from "pages/Users/BookSpaceWeekly";
import Documents from "pages/Users/Documents";
import DocumentsOne from "pages/Users/DocumentsOne";
import Files from "pages/Users/Files";
import MyBooking from "pages/Users/MyBooking";
import MyBookingFilter from "pages/Users/MyBookingFilter";
import MyVotes from "pages/Users/MyVotes";
import SpaceManagement from "pages/Users/SpaceManagement";
import SpaceManagementDelete from "pages/Users/SpaceManagementDelete";
import ViewBooking from "pages/Users/ViewBooking";
import ViewSpace from "pages/Users/ViewSpace";
import VoteHere from "pages/Users/VoteHere";
import Votes from "pages/Users/Votes";
import Dashboard from "../../pages/Users/Dashboard";
import MyProfile from "../../pages/Users/MyProfile";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={Dashboard} />}
      />
      <Route
        path="/spacemanagementdelete"
        element={<ProtectedRoute element={SpaceManagementDelete} />}
      />
      <Route
        path="/spacemanagement"
        element={<ProtectedRoute element={SpaceManagement} />}
      />
      <Route
        path="/viewspace"
        element={<ProtectedRoute element={ViewSpace} />}
      />
      <Route
        path="/bookspacedaily"
        element={<ProtectedRoute element={BookSpaceDaily} />}
      />
      <Route
        path="/bookspaceweekly"
        element={<ProtectedRoute element={BookSpaceWeekly} />}
      />
      <Route
        path="/bookspacemonthly"
        element={<ProtectedRoute element={BookSpaceMonthly} />}
      />
      <Route
        path="/viewbooking"
        element={<ProtectedRoute element={ViewBooking} />}
      />
      <Route
        path="/mybooking"
        element={<ProtectedRoute element={MyBooking} />}
      />
      <Route
        path="/mybookingfilter"
        element={<ProtectedRoute element={MyBookingFilter} />}
      />
      <Route
        path="/documents"
        element={<ProtectedRoute element={Documents} />}
      />
      <Route
        path="/documentsone"
        element={<ProtectedRoute element={DocumentsOne} />}
      />
      <Route
        path="/votehere"
        element={<ProtectedRoute element={VoteHere} />}
      />
      <Route path="/files" element={<ProtectedRoute element={Files} />} />
      <Route path="/votes" element={<ProtectedRoute element={Votes} />} />
      <Route path="/myvotes" element={<ProtectedRoute element={MyVotes} />} />
      <Route path="/allapplication" element={<ProtectedRoute element={AllApplication} />} />
      <Route path="/bookings" element={<ProtectedRoute element={Bookings} />} />
      <Route path="/myProfile" element={<ProtectedRoute element={MyProfile} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default ProjectRoutes;
