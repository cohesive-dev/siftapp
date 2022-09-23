export type AcademicStatsType = {
  id: number;
  title: string;
  count: string;
  new: string;
  badgeColor: string;
  bgcolor: string;
  icon: string;
};

export type CourseCategoryType = {
  id: number;
  title: string;
  desc: string;
  lessons: number;
  xp: number;
  images: {
    image: string;
    title: string;
  }[];
};

export type ProfileType = {
  id: number;
  profile_pic: string;
  name: string;
  designation: string;
  achievements: number;
  friends: number;
};

export type CoursesType = {
  categories: {
    id: number;
    title: string;
    slug: string;
  }[];
  courses: {
    id: number;
    title: string;
    duration: string;
    rating: number;
    isCompleted: boolean;
    thumb: string;
  }[];
};

export type NotificationDataType = {
  id: number;
  bgcolor: string;
  color: string;
  letter: string;
  content: string;
  date: any;
};

export type CourseDetailsType = {
  id: number;
  title: string;
  thumb: string;
  level: string;
  coveredDuration: string;
  totalDuration: string;
  coveredPractice: string;
  totalPractice: string;
  graphData: {
    month: string;
    duration: number;
  }[];
};

export type LearningDataType = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  percentage: number;
};

export type LatestResultDataType = {
  id: number;
  chapter: string;
  topic: string;
  percentage: number;
};

export type ClassDataType = {
  id: number;
  name: string;
  percent: number;
  icon: string;
};

export type StudentRankingDataType = {
  id: number;
  name: string;
  profile_pic: string;
  courseId: number;
  courseName: string;
  totalGrade: number;
  ranking: number;
  category: string;
};

export type GradesType = {
  month: string;
  grades: number;
};

export type RelatedCoursesDataType = {
  id: number;
  image: string;
  title: string;
  author: string;
  views: string;
};

export type VideoPromoDataType = {
  title: string;
  owner: string;
  category: string;
  assignments: {
    id: number;
    title: string;

    desc: string;
    students: number;
    daysLeft: number;
  }[];
};

export type AcademyType = {
  academicStats: AcademicStatsType[];
  courseCategories: CourseCategoryType[];
  profile: ProfileType;
  courses: CoursesType;
  notifications: NotificationDataType[];
  courseDetails: CourseDetailsType[];
  learningData: LearningDataType[];
  latestResults: LatestResultDataType[];
  classData: ClassDataType[];
  studentRankings: StudentRankingDataType[];
  grades: GradesType[];
  relatedCourses: RelatedCoursesDataType[];
  videoPromo: VideoPromoDataType;
};
