import type { Task } from '@/types';

export function generateTaskSuggestions(projectName: string, projectDescription?: string): Task[] {
  const name = projectName.toLowerCase();
  const desc = (projectDescription || '').toLowerCase();
  const timestamp = Date.now();
  
  // Pattern matching for common GTM project types
  if (name.includes('icp') || name.includes('persona')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Review existing customer data', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Answer ICP definition questions', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Interview 5-10 target customers', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Draft persona document', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Validate with team', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  if (name.includes('drip') || name.includes('email') || name.includes('nurture')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Map user journey and trigger points', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Define sequence goals and KPIs', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Write email copy (all messages)', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Review copy with stakeholders', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Build sequence in email tool', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-6`, projectId: '', title: 'Test with small cohort', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  if (name.includes('landing') || name.includes('page') || name.includes('website')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Draft messaging and value prop', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Create wireframes/mockups', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Write all page copy', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Design and build page', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Review with design team', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-6`, projectId: '', title: 'Set up analytics and tracking', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  if (name.includes('launch') || name.includes('gtm')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Define launch goals and success metrics', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Create launch timeline', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Draft announcement and messaging', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Prepare sales enablement materials', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Coordinate with product/eng', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-6`, projectId: '', title: 'Execute launch plan', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  if (name.includes('faq') || name.includes('documentation') || name.includes('docs')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Audit existing FAQs and docs', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Identify common questions/gaps', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Draft new/updated content', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Review with support team', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Publish and organize', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  if (name.includes('pilot') || name.includes('beta') || name.includes('test')) {
    return [
      { id: `${timestamp}-1`, projectId: '', title: 'Define pilot goals and criteria', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-2`, projectId: '', title: 'Recruit pilot participants', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-3`, projectId: '', title: 'Create onboarding materials', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-4`, projectId: '', title: 'Launch pilot program', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-5`, projectId: '', title: 'Collect feedback and iterate', completed: false, createdAt: new Date().toISOString() },
      { id: `${timestamp}-6`, projectId: '', title: 'Analyze results and decide next steps', completed: false, createdAt: new Date().toISOString() },
    ];
  }
  
  // Default generic GTM tasks
  return [
    { id: `${timestamp}-1`, projectId: '', title: 'Define project goals and success metrics', completed: false, createdAt: new Date().toISOString() },
    { id: `${timestamp}-2`, projectId: '', title: 'Research and gather requirements', completed: false, createdAt: new Date().toISOString() },
    { id: `${timestamp}-3`, projectId: '', title: 'Create initial draft/prototype', completed: false, createdAt: new Date().toISOString() },
    { id: `${timestamp}-4`, projectId: '', title: 'Review with stakeholders', completed: false, createdAt: new Date().toISOString() },
    { id: `${timestamp}-5`, projectId: '', title: 'Finalize and ship', completed: false, createdAt: new Date().toISOString() },
  ];
}
