import React, { useState, useEffect } from "react";
import { FiMoreHorizontal, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ActivityCard } from "./ActivityCard";
import { historyService } from "../../services/history.service";

export const ActivitySection = () => {
  const [activities, setActivities] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        const { history, pagination } = await historyService.getHistory(currentPage);
        setActivities(history);
        setPagination(pagination);
      } catch (error) {
        console.error('Failed to fetch history:', error);
        setError('Failed to load activities');
        setActivities([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [currentPage]); // Add currentPage as dependency

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination?.totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <span className="text-gray-500">Loading activities...</span>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Aktivitas terakhir</h2>
        {pagination && (
          <span className="text-sm text-gray-500">
            Showing {activities.length} of {pagination.totalItems} items
          </span>
        )}
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            date={new Date(activity.created_at).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
            points={new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR'
            }).format(activity.uang_didapat)}
            title={
              activity.jenis_sampah === "other" 
                ? "Bukan sampah yang dapat didaur ulang"
                : `Daur ulang ${activity.jenis_sampah}`
            }
          />
        ))}
        {activities.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            Belum ada aktivitas
          </p>
        )}

        {/* Add pagination controls */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Previous page"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(pagination.totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`w-8 h-8 rounded-lg ${
                    currentPage === idx + 1
                      ? 'bg-green-1 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination.totalPages}
              className={`p-2 rounded-lg ${
                currentPage === pagination.totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Next page"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};