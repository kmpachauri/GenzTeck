import { useState, useEffect } from 'react';
import { publicAPI } from '../api';

export function usePublicData() {
  const [data, setData] = useState({
    settings: null,
    services: [],
    products: [],
    projects: [],
    demos: [],
    demoVideos: [],
    testimonials: [],
    blogs: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [settings, services, products, projects, demos, demoVideos, testimonials, blogs] = await Promise.allSettled([
          publicAPI.getSettings(),
          publicAPI.getServices(),
          publicAPI.getProducts(),
          publicAPI.getProjects(),
          publicAPI.getDemos(),
          publicAPI.getDemoVideos(),
          publicAPI.getTestimonials(),
          publicAPI.getBlogs()
        ]);

        setData({
          settings: settings.status === 'fulfilled' ? settings.value.data.data : null,
          services: services.status === 'fulfilled' ? services.value.data.data : [],
          products: products.status === 'fulfilled' ? products.value.data.data : [],
          projects: projects.status === 'fulfilled' ? projects.value.data.data : [],
          demos: demos.status === 'fulfilled' ? demos.value.data.data : [],
          demoVideos: demoVideos.status === 'fulfilled' ? demoVideos.value.data.data : [],
          testimonials: testimonials.status === 'fulfilled' ? testimonials.value.data.data : [],
          blogs: blogs.status === 'fulfilled' ? blogs.value.data.data : []
        });
      } catch (e) {
        console.error('Failed to fetch data:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { data, loading };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

export function useScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return { visible, scrollToTop };
}
