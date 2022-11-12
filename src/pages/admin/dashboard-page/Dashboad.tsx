import React from "react";

interface DashBoardPageProps {}

interface DashBoardPageState {}

class DashBoardPage extends React.Component<
  DashBoardPageProps,
  DashBoardPageState
> {
  // state = { :  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2 bg-danger">
            <h1>menu nav</h1>
          </div>
          <div className="col-md-10 bg-primary">
            <h1>content</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardPage;
