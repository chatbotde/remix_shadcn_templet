import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { testConnection, getDatabase } from "~/lib/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const isConnected = await testConnection();
    
    let databaseInfo = null;
    if (isConnected) {
      const db = await getDatabase();
      // Get database stats
      const stats = await db.stats();
      databaseInfo = {
        name: db.databaseName,
        collections: stats.collections,
        dataSize: stats.dataSize,
      };
    }

    return json({
      success: isConnected,
      message: isConnected ? "Database connection successful!" : "Database connection failed!",
      databaseInfo,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database test error:", error);
    return json({
      success: false,
      message: `Database connection error: ${error instanceof Error ? error.message : "Unknown error"}`,
      databaseInfo: null,
      timestamp: new Date().toISOString(),
    });
  }
}

export default function TestDatabase() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Database Connection Test</h1>
      
      <div className={`p-4 rounded-lg border ${
        data.success 
          ? "bg-green-50 border-green-200 text-green-800" 
          : "bg-red-50 border-red-200 text-red-800"
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">
            {data.success ? "✅" : "❌"}
          </span>
          <span className="font-semibold">{data.message}</span>
        </div>
        
        <p className="text-sm opacity-75">
          Tested at: {new Date(data.timestamp).toLocaleString()}
        </p>
      </div>

      {data.databaseInfo && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-blue-800">Database Information</h2>
          <div className="space-y-2 text-sm">
            <div><strong>Database Name:</strong> {data.databaseInfo.name}</div>
            <div><strong>Collections:</strong> {data.databaseInfo.collections}</div>
            <div><strong>Data Size:</strong> {(data.databaseInfo.dataSize / 1024).toFixed(2)} KB</div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Test Again
        </button>
      </div>
    </div>
  );
}
