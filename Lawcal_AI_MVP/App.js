
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Lawcal AI</h1>
        <p className="text-xl mb-6">
          Η Νομική Τεχνητή Νοημοσύνη για ελληνικά και ευρωπαϊκά δεδομένα.
        </p>

        <Card className="bg-white shadow-xl mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Τι κάνει η Lawcal AI;</h2>
            <p>
              Η Lawcal AI είναι ένα προηγμένο νομικό εργαλείο βασισμένο σε AI,
              εκπαιδευμένο σε ελληνική νομολογία, αποφάσεις και νομικά έγγραφα. Παρέχει
              τόσο πληροφορίες όσο και προτάσεις, λειτουργώντας ως νομικός σύμβουλος για επαγγελματίες.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Demo (στατικό)</h2>
            <div className="text-left bg-gray-50 p-4 rounded-lg border">
              <p><strong>Ερώτηση:</strong> Τι ισχύει για την καταγγελία σύμβασης αορίστου χρόνου;</p>
              <p className="mt-2"><strong>Lawcal AI:</strong> Σύμφωνα με το άρθρο 671 ΑΚ, η καταγγελία είναι ελεύθερη με προειδοποίηση, εκτός αν προβλέπεται διαφορετικά από σύμβαση ή ΣΣΕ.</p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Ενδιαφέρεστε να το δοκιμάσετε;</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input placeholder="Το email σας" className="w-64" />
            <Button>Επικοινωνήστε μαζί μας</Button>
          </div>
        </div>

        <footer className="text-sm text-gray-600">
          © 2025 Lawcal AI | info@lawcal.ai
        </footer>
      </div>
    </div>
  );
}
