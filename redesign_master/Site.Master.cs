using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace redesign_master
{
    public partial class Site1 : System.Web.UI.MasterPage
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            string path = Request.Path;
            //System.Diagnostics.Debug.WriteLine(path);
        }

        /*
         * Method: getSubLinks
         * Description: Obtains a list of links to build a sub-navigation-menu with, based on the page (in the form of an ID).
         * @param: id (integer) - Specifies current landing page (i.e. Students, Alumni, etc)
         * @return: sublinks (Dictionary object) containing list of links to build sub-menus.
         */
        public Dictionary<string, string> getSubLinks(int id)
        {
            //List<string> sublinks = new List<string>();
            Dictionary<string, string> sublinks = new Dictionary<string, string>();

            switch (id)
            {
                case 1:  
                    sublinks.Add("/students/services.aspx","Services");
                    sublinks.Add("/students/careerplanning.aspx", "Career & Major Planning");
                    sublinks.Add("/students/resumes.aspx", "Resumes & Interviewing");
                    sublinks.Add("/students/jobsearch.aspx", "Job Search & Internships");
                    sublinks.Add("/students/graduate.aspx", "Graduate & Professional Programs");
                    
                    break;
                case 2:
                    /*sublinks.Add("/students/services.aspx", "Job Postings &" + mycco);
                    sublinks.Add("/students/services.aspx", "Services");
                    sublinks.Add("/students/services.aspx", "Graduate & Professional Programs");
                    sublinks.Add("/students/services.aspx", "CCO Site Map");*/
                    break;
                case 3:
                    /*sublinks.Add("/students/services.aspx", "Post Internship & Jobs");
                    sublinks.Add("/students/services.aspx", "Request Resumes");
                    sublinks.Add("/students/services.aspx", "Recruit On Campus");
                    sublinks.Add("/students/services.aspx", "NACElink @ Purdue");
                    sublinks.Add("/students/services.aspx", partners);*/
                    break;
                case 4:
                    /*sublinks.Add("/students/services.aspx", "Faculty Home");
                    sublinks.Add("/students/services.aspx", "CCO Services");
                    sublinks.Add("/students/services.aspx", "Students");
                    sublinks.Add("/students/services.aspx", "NACE");
                    sublinks.Add("/students/services.aspx", partners);
                    sublinks.Add("/students/services.aspx", "Faculty Site Map");*/
                    break;
                case 5:
                    /*sublinks.Add("/students/services.aspx", "Student Referrals to CCO");
                    sublinks.Add("/students/services.aspx", "4 Year College Plan");
                    sublinks.Add("/students/services.aspx", "Internships");
                    sublinks.Add("/students/services.aspx", "Full Time Jobs");
                    sublinks.Add("/students/services.aspx", "Graduate/Professional School");*/
                    break;
                case 6:
                    /*sublinks.Add("/students/services.aspx", "Services");
                    sublinks.Add("/students/services.aspx", "Career & Major Planning");
                    sublinks.Add("/students/services.aspx", "Resumes & Interviewing");
                    sublinks.Add("/students/services.aspx", "Job Search & Internships");
                    sublinks.Add("/students/services.aspx", "Graduate & Professional Programs");*/
                    break;
            }
            return sublinks;
        }
    }
}