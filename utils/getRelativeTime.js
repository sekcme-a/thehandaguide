export const  parseYYYYMMDDToDate = (dateString) => {
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1; // JS에서는 0부터 시작
  const day = parseInt(dateString.substring(6, 8), 10);
  
  return new Date(year, month, day);
}
export const formatDateToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 두 자리 보장
  const day = String(date.getDate()).padStart(2, "0"); // 두 자리 보장
  
  return `${year}${month}${day}`;
}



export function getRelativeTime(timestamp) {
  const now = new Date();
  const post = new Date(timestamp);

  // UTC로 변환
  const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const postUTC = new Date(post.getTime() + post.getTimezoneOffset() * 60000);

  const diffInSeconds = Math.floor((nowUTC - postUTC) / 1000);

  const times = [
    { name: '년 전', seconds: 31536000 },
    { name: '달 전', seconds: 2592000 },
    { name: '주 전', seconds: 604800 },
    { name: '일 전', seconds: 86400 },
    { name: '시간 전', seconds: 3600 },
    { name: '분 전', seconds: 60 },
  ];

  for (let { name, seconds } of times) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return interval + name;
    }
  }

  return '방금 전';
}

export function formatTimestampzToKorean(tzString, onlyYMD) {
  const date = new Date(tzString);

  // Extract year, month, and day
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // Format hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const isAM = hours < 12;
  const period = isAM ? '오전' : '오후';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  if(onlyYMD)
    return `${year}.${month}.${day}`
  return `${year}.${month}.${day} ${period} ${String(hours).padStart(2, '0')}:${minutes}`;
}


export function hasDeadline(tzString) {
  const timestampDate = new Date(tzString); // Supabase timestampz to Date object
  const currentDate = new Date();           // Current date

  // Create a date 100 years in the future from the current date
  const futureDate = new Date();
  futureDate.setFullYear(currentDate.getFullYear() + 100);

  // Compare the dates
  return timestampDate < futureDate;
}

export function isTimestampInFuture(tzString) {
  const timestampDate = new Date(tzString); // Convert Supabase timestamptz to Date object
  const currentDate = new Date();           // Get current date

  // Compare the dates
  return timestampDate > currentDate;
}




/**
 * Checks if a given Supabase timestamptz deadline has passed.
 * 
 * @param {string} deadlineTimestamptz - The deadline in ISO 8601 format (e.g., "2025-01-07T15:30:00Z").
 * @returns {boolean} - Returns true if the deadline has passed, false otherwise.
 */
export function isDeadlinePassed(deadlineTimestamptz) {
  if (!deadlineTimestamptz) {
    return false
  }

  // Parse the Supabase timestamptz into a Date object
  const deadlineDate = new Date(deadlineTimestamptz);

  if (isNaN(deadlineDate.getTime())) {
    throw new Error("Invalid deadlineTimestamptz: unable to parse to a valid Date.");
  }

  // Get the current date and time
  const now = new Date();

  // Compare the dates
  return deadlineDate < now;
}
