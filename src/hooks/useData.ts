import _get from 'lodash/get'; 
import { useQuery } from "@apollo/client";
import { ABOUT_ME } from "graphql/query/about.query";
import { MY_SKILLS } from "graphql/query/skills.query";
import { EDUCATIONS } from "graphql/query/educations.query";
import { PROCESSES } from "graphql/query/processes.query";
import { EXPERIENCES } from "graphql/query/experiences.query";
import { SERVICES } from "graphql/query/services.query";
import { PORTFOLIO } from "graphql/query/portfolios.query";
import { PHOTOS } from "graphql/query/photos.query";
import { VIDEO } from "graphql/query/video.query";
import { TESTIMONIALS } from "graphql/query/testimonials.query";
import { AWARD } from "graphql/query/awards.query";
import { CHANNELS } from "graphql/query/channels.query";
import { TOPICS } from 'graphql/query/topics.query';
import { BLOG } from 'graphql/query/blog.query';


export const useData = () => {
  const { data: aboutData } = useQuery(ABOUT_ME);
  const { data: skillsData } = useQuery(MY_SKILLS);
  const { data: eduData } = useQuery(EDUCATIONS);
  const { data: processData } = useQuery(PROCESSES);
  const { data: expData } = useQuery(EXPERIENCES);
  const { data: serviceData } = useQuery(SERVICES);
  const { data: portfolioData } = useQuery(PORTFOLIO);
  const { data: videoData } = useQuery(VIDEO);
  const { data: testimonialData } = useQuery(TESTIMONIALS);
  const { data: awardData } = useQuery(AWARD);
  const { data: channelsData } = useQuery(CHANNELS);
  const { data: topicsData } = useQuery(TOPICS);
  const { data: blogPosts, loading: _blogLoading } = useQuery(BLOG);
  const { data: _photos, refetch: _getPhoto } = useQuery(PHOTOS, {
    skip: true
  }); 

  const _about = _get(aboutData, 'getProfile.profile', null);
  const _skills = _get(skillsData, 'getSkills.skills', []);
  const _educations = _get(eduData, 'getEducations.educations', []);
  const _processes = _get(processData, 'getProcesses.processes', []);
  const _experiences = _get(expData, 'getExperiences.experiences', []);
  const _services = _get(serviceData, 'getServices.services', []);
  const _portfolios = _get(portfolioData, 'getPortfolios.portfolios', []);
  const _video = _get(videoData, 'getVideo.video', null);
  const _testimonials = _get(testimonialData, 'getTestimonials.testimonials', []);
  const _awards = _get(awardData, 'getAwards.awards', []);
  const _channels = _get(channelsData, 'getChannels.channels', []);
  const _topics = _get(topicsData, 'getNewsletterTopics.newsletterTopics', []);
  const _blogPosts = _get(blogPosts, 'getPosts.posts', []);

  return {
    _about,
    _skills,
    _educations,
    _processes,
    _experiences,
    _services,
    _portfolios,
    _photos,
    _getPhoto,
    _video,
    _testimonials,
    _awards,
    _channels,
    _topics,
    _blogPosts,
    _blogLoading,
  };
};