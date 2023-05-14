import HomePage from '../pages/HomePage';
import SkillsPage from '../pages/SkillsPage';

export default {
  public: [
    {
      title: 'Home',
      path: '/',
      Element: HomePage,
    },
  ],
  private: [
    {
      title: 'Skills',
      path: '/skills',
      Element: SkillsPage,
    },
    // {
    //   title: 'Current Quests',
    //   path: '/current-quests',
    //   Element: currentCourses,
    // },
    // {
    //   title: 'Achievements',
    //   path: '/awards',
    //   Element: AwardsPage,
    // }
  ],
};
