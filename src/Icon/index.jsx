import React from 'react';
import PropTypes from 'prop-types';
import Academy from './Academy';
import ArrowDown from './ArrowDown';
import Back from './Back';
import Bell from './Bell';
import C from './C';
import Cancel from './Cancel';
import Cards from './Cards';
import CaretDown from './CaretDown';
import CaretLeft from './CaretLeft';
import CaretRight from './CaretRight';
import CaretUp from './CaretUp';
import Chapter from './Chapter';
import ChartPie from './ChartPie';
import CheckSelect from './CheckSelect';
import ChevronDoubleLeft from './ChevronDoubleLeft';
import ChevronDoubleRight from './ChevronDoubleRight';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Circle from './Circle';
import Close from './Close';
import CodePractice from './CodePractice';
import Comment from './Comment';
import Complete from './Complete';
import Confirm from './Confirm';
import Connection from './Connection';
import Control from './Control';
import ControlUp from './ControlUp';
import ControlDown from './ControlDown';
import Copy from './Copy';
import Course from './Course';
import CourseHistory from './CourseHistory';
import CourseManagement from './CourseManagement';
import CourseSetting from './CourseSetting';
import Cpp from './Cpp';
import Csharp from './Csharp';
import Download from './Download';
import Equal from './Equal';
import Exam from './Exam';
import ExamList from './ExamList';
import ExamManagement from './ExamManagement';
import Facebook from './Facebook';
import File from './File';
import Flag from './Flag';
import Go from './Go';
import Help from './Help';
import Image from './Image';
import Indeterminate from './Indeterminate';
import Information from './Information';
import InputSetting from './InputSetting';
import Java from './Java';
import Javascript from './Javascript';
import List from './List';
import Mail from './Mail';
import MarkMode from './MarkMode';
import Menu from './Menu';
import Minus from './Minus';
import MinusBox from './MinusBox';
import More from './More';
import MoreBorder from './MoreBorder';
import Movie from './Movie';
import Notice from './Notice';
import Pen from './Pen';
import PlayMode from './PlayMode';
import Plus from './Plus';
import PlusBox from './PlusBox';
import PracticeContents from './PracticeContents';
import Preset from './Preset';
import Price from './Price';
import Print from './Print';
import Python from './Python';
import Python3 from './Python3';
import Qna from './Qna';
import R from './R';
import Refresh from './Refresh';
import Reply from './Reply';
import ResultManagement from './ResultManagement';
import Ruby from './Ruby';
import School from './School';
import Search from './Search';
import Setting from './Setting';
import Star from './Star';
import StarHalf from './StarHalf';
import StarOutline from './StarOutline';
import Stop from './Stop';
import StudentManagement from './StudentManagement';
import SubmitMode from './SubmitMode';
import Syllabus from './Syllabus';
import Terminal from './Terminal';
import Times from './Times';
import University from './University';
import User from './User';
import ViewExpand from './ViewExpand';
import ViewScroll from './ViewScroll';
import ViewShrink from './ViewShrink';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';
import Payco from './Payco';
import Danal from './Danal';
import Profile from './Profile';
import LogoGoormIde from './LogoGoormIde';

function Icon({ iconId, className, ...iconProps }) {
	const IconComponents = {
		academy: Academy,
		'arrow-down': ArrowDown,
		back: Back,
		bell: Bell,
		c: C,
		cancel: Cancel,
		cards: Cards,
		'caret-down': CaretDown,
		'caret-left': CaretLeft,
		'caret-right': CaretRight,
		'caret-up': CaretUp,
		chapter: Chapter,
		'chart-pie': ChartPie,
		'check-select': CheckSelect,
		'chevron-double-left': ChevronDoubleLeft,
		'chevron-double-right': ChevronDoubleRight,
		'chevron-down': ChevronDown,
		'chevron-left': ChevronLeft,
		'chevron-right': ChevronRight,
		'chevron-up': ChevronUp,
		circle: Circle,
		close: Close,
		'code-practice': CodePractice,
		comment: Comment,
		complete: Complete,
		confirm: Confirm,
		connection: Connection,
		control: Control,
		'control-up': ControlUp,
		'control-down': ControlDown,
		copy: Copy,
		course: Course,
		'course-history': CourseHistory,
		'course-management': CourseManagement,
		'course-setting': CourseSetting,
		cpp: Cpp,
		csharp: Csharp,
		download: Download,
		equal: Equal,
		exam: Exam,
		'exam-list': ExamList,
		'exam-management': ExamManagement,
		facebook: Facebook,
		file: File,
		flag: Flag,
		go: Go,
		help: Help,
		image: Image,
		indeterminate: Indeterminate,
		information: Information,
		'input-setting': InputSetting,
		list: List,
		java: Java,
		js: Javascript,
		mail: Mail,
		'mark-mode': MarkMode,
		menu: Menu,
		minus: Minus,
		'minus-box': MinusBox,
		more: More,
		'more-border': MoreBorder,
		movie: Movie,
		notice: Notice,
		pen: Pen,
		'play-mode': PlayMode,
		plus: Plus,
		'plus-box': PlusBox,
		'practice-contents': PracticeContents,
		preset: Preset,
		price: Price,
		print: Print,
		python: Python,
		python3: Python3,
		qna: Qna,
		r: R,
		refresh: Refresh,
		reply: Reply,
		'result-management': ResultManagement,
		ruby: Ruby,
		school: School,
		search: Search,
		setting: Setting,
		star: Star,
		'star-half': StarHalf,
		'star-outline': StarOutline,
		stop: Stop,
		'student-management': StudentManagement,
		'submit-mode': SubmitMode,
		syllabus: Syllabus,
		terminal: Terminal,
		times: Times,
		user: User,
		university: University,
		'view-expand': ViewExpand,
		'view-scroll': ViewScroll,
		'view-shrink': ViewShrink,
		'zoom-in': ZoomIn,
		'zoom-out': ZoomOut,
		Payco: Payco,
		Danal: Danal,
		profile: Profile,
		'logo_goorm_ide': LogoGoormIde,
	};
	
	
	
	
	/* 아이콘 추가시 여기부터는 수정하지 말아주세요 */
	let icons = [];
	for (const id in IconComponents) {
		const IconName = IconComponents[id] || <span></span>;
		icons.push(<IconName className={className} {...iconProps} />);
	}
	console.log(icons[0]);
	return (
		<div className="container">
			<div className="row" style={{'marginTop':'30px'}}>
				{icons.map((v,i)=>{
					return (
						<div className="col-md-2 col-sm-3 col-4">
							<div className="iconcard">
								<div style={{'padding':'10px'}}>{v}</div>
								<div style={{'font-size':'14px'}}>{v.type.name}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}

Icon.defaultProps = {
	size: '16px',
	color: 'currentColor',
	onClick: () => {},
	style: {},
};

Icon.propTypes = {
	iconId: PropTypes.string.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.objectOf(PropTypes.string),
	className: PropTypes.string
};

export default Icon;
