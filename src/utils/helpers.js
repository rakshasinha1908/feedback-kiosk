/**
 * Generate a unique session ID using timestamp and random string
 */
export const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Format ISO timestamp to readable date
 */
export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Get survey statistics from archive
 */
export const getSurveyStats = () => {
  try {
    const surveys = JSON.parse(localStorage.getItem('surveysArchive') || '[]');
    return {
      totalSurveys: surveys.length,
      surveys,
    };
  } catch (error) {
    console.error('Error getting survey stats:', error);
    return { totalSurveys: 0, surveys: [] };
  }
};

/**
 * Clear all survey data (admin function)
 */
export const clearAllSurveyData = () => {
  localStorage.removeItem('surveySession');
  localStorage.removeItem('surveysArchive');
};