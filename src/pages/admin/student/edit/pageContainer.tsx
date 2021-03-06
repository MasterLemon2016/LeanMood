import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { EditStudentPage } from './page';
import { summaryStudentByIdRequestStarted } from './actions/summaryStudentRequest';

const mapStateToProps = (state: IAppState, ownProps) => ({
  studentId: ownProps.params.id.toString(),
  student: state.adminStudent.editingStudentSummary,
});

const mapDispatchToProps = (dispatch) => ({
  getStudent: (studentId: string) => dispatch(summaryStudentByIdRequestStarted(studentId)),
});

export const EditStudentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditStudentPage);
